import { Car } from "@/@types/car";
import { BookARideForm } from "@/@types/formData";
import { useAppSelector } from "@/app/hooks";
import Loader from "@/components/Loader";
import NoData from "@/components/NoData";
import Button from "@/components/buttons/Button";
import CarsCard from "@/components/cars/CarsCard";
import PageContainer from "@/containers/PageContainer";
import { API_URL, bookARideDefaultValues as defaultValues } from "@/lib/consts";
import { useBranchList } from "@/lib/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import FilterCars from "./FilterCars";

export default function CarRentalPage() {
  const {
    carRental,
    btns,
    messages: { common },
  } = useAppSelector((state) => state.language.lang);
  const bookARideForm = useForm<BookARideForm>({
    defaultValues,
  });
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = bookARideForm;
  const [searchParams, setSearchParams] = useSearchParams();
  const { branchList } = useBranchList();
  const [availableCars, setAvailableCars] = useState<Car[]>([]);
  const [displayFilter, setDisplayFilter] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (setValue && searchParams && branchList) {
      if (searchParams.get("pickup")) {
        setValue("pickup", searchParams.get("pickup"));
      }
      if (searchParams.get("startDate") && searchParams.get("endDate")) {
        setValue(
          "travelDate",
          `${searchParams.get("startDate")}-${searchParams.get("endDate")}`
        );
      }

      if (searchParams.get("startDate") && searchParams.get("endDate")) {
        onSubmit({
          pickup: null,
          travelDate: `${searchParams.get("startDate")}-${searchParams.get(
            "endDate"
          )}`,
        });
      }
      setDisplayFilter(true);
      setSearchParams({});
    }

    return () => {
      setDisplayFilter(false);
    };
  }, [setValue, searchParams, setSearchParams, branchList]);

  const onSubmit = async (form: BookARideForm) => {
    setIsLoading(true);
    setDisplayResults(true);
    try {
      const res = await axios.get(
        API_URL.getAvailableCars + "?travelDate=" + form.travelDate
      );
      if (res && res.data) {
        setAvailableCars(res.data as Car[]);
      } else {
        setAvailableCars([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PageContainer title="Car Rental">
      <FormProvider {...bookARideForm}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="content-container flex flex-col mt-4 py-4"
        >
          <h1>{carRental[0]}</h1>
          {displayFilter && branchList ? (
            <div
              className={`flex items-center ${
                Object.keys(errors).length > 0 ? "gap-8" : "gap-4"
              } md:gap-4 md:flex-row flex-col mt-4 w-full`}
            >
              <FilterCars branchList={branchList} />
              <Button type="submit" theme="filled" className="w-full md:w-auto">
                {btns[1]}
              </Button>
            </div>
          ) : null}
          <div className="relative h-full w-full min-h-screen mt-4">
            {!isLoading ? (
              displayResults ? (
                availableCars.length > 0 ? (
                  <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-12 gap-4 w-full place-items-stretch">
                    {availableCars.map((c) => (
                      <CarsCard car={c} key={c.id} />
                    ))}
                  </div>
                ) : (
                  <NoData content={common[1]} />
                )
              ) : (
                <NoData content={common[2]} />
              )
            ) : (
              <Loader show={isLoading} />
            )}
          </div>
        </form>
      </FormProvider>
    </PageContainer>
  );
}
