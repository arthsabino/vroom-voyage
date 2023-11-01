import { Car } from "@/@types/car";
import { BookARideForm } from "@/@types/formData";
import { useAppSelector } from "@/app/hooks";
import NoData from "@/components/NoData";
import Button from "@/components/buttons/Button";
import CarsCard from "@/components/cars/CarsCard";
import PageContainer from "@/containers/PageContainer";
import { bookARideDefaultValues as defaultValues } from "@/lib/consts";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState<Car[]>([]);
  const [displayFilter, setDisplayFilter] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  const bookARideForm = useForm<BookARideForm>({
    defaultValues,
  });
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = bookARideForm;
  useEffect(() => {
    if (setValue && searchParams) {
      if (searchParams.get("pickup")) {
        setValue("pickup", searchParams.get("pickup"));
      }
      if (searchParams.get("startDate") && searchParams.get("endDate")) {
        setValue(
          "travelDate",
          `${searchParams.get("startDate")}-${searchParams.get("endDate")}`
        );
      }
      setDisplayFilter(true);
      setSearchParams({});
    }

    return () => {
      setDisplayFilter(false);
    };
  }, [setValue, searchParams, setSearchParams]);

  const onSubmit = (form: BookARideForm) => {
    setDisplayResults(true);
    console.log(form);
  };
  return (
    <PageContainer title="Car Rental">
      <FormProvider {...bookARideForm}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="content-container flex flex-col mt-4 py-4 min-h-screen"
        >
          <h1>{carRental[0]}</h1>
          {displayFilter ? (
            <div
              className={`flex items-center ${
                Object.keys(errors).length > 0 ? "gap-8" : "gap-4"
              } md:gap-4 md:flex-row flex-col mt-4 w-full`}
            >
              <FilterCars />
              <Button type="submit" theme="filled" className="w-full md:w-auto">
                {btns[1]}
              </Button>
            </div>
          ) : null}
          {cars.length > 0 ? (
            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-12 gap-4 w-full place-items-center">
              {cars.map((c) => (
                <CarsCard car={c} key={c.id} />
              ))}
            </div>
          ) : (
            <NoData content={common[1]} />
          )}
        </form>
      </FormProvider>
    </PageContainer>
  );
}
