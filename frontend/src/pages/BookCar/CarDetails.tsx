import { Car } from "@/@types/car";
import { useAppSelector } from "@/app/hooks";
import { svgs } from "@/components/Image";
import Button from "@/components/buttons/Button";
import { CarDesc } from "@/components/cars/CarDesc";
import InputText from "@/components/formElements/InputText";
import { formatPrice } from "@/lib/format";
import { useBranchList, useRentDatesByCarId } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import FilterCars from "../CarRental/FilterCars";

interface CarDetailsProps {
  car: Car;
}
export default function CarDetails({ car }: CarDetailsProps) {
  const { dates } = useRentDatesByCarId(car?.id as string);
  const {
    carRental,
    car: carStr,
    travelGuide,
    messages: { travelGuide: msgStr },
  } = useAppSelector((state) => state.language.lang);
  const [searchParams, setSearchParams] = useSearchParams();
  const { branchList } = useBranchList();
  const [displayFilter, setDisplayFilter] = useState(false);
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext();
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
      setDisplayFilter(true);
      setSearchParams({});
    }

    return () => {
      setDisplayFilter(false);
    };
  }, [setValue, searchParams, setSearchParams, branchList]);
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pl-16">
      <div className="flex items-center flex-wrap gap-4 justify-between font-semibold mt-2">
        <div className="flex items-center pr-4 text-primary">
          <h3 className="text-primary">{formatPrice(car.ratePerDay)}</h3>
          <span className="text-xs">{carStr[0]}</span>
        </div>
        <span className=" font-bold text-desc lg:block md:hidden sm:block">
          |
        </span>
        <div className="text-desc flex items-center font-semibold">
          <h3>{formatPrice(car.ratePerMonth)}</h3>
          <span className="text-xs">{carStr[1]}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 rounded bg-alt-surface">
        <CarDesc icon={svgs.model} desc={car.model} title={carStr[3]} />
        <CarDesc icon={svgs.make} desc={car.make} title={carStr[4]} />
        <CarDesc
          icon={svgs.seat}
          desc={`${car.seat}-${carStr[2]}`}
          title={carStr[5]}
        />
        <CarDesc
          icon={svgs.transmission}
          desc={car.transmission}
          title={carStr[6]}
        />
        <CarDesc icon={svgs.petrol} desc={car.petrol} title={carStr[7]} />
      </div>

      {displayFilter && branchList ? (
        <div
          className={`flex items-center ${
            Object.keys(errors).length > 0 ? "gap-8" : "gap-4"
          } md:gap-4 flex flex-col w-full`}
        >
          <FilterCars branchList={branchList} confirmedDates={dates} />

          <InputText
            input={{
              ...register("name", {
                required: msgStr[0],
              }),
              type: "text",
              placeholder: travelGuide[1],
            }}
            label={travelGuide[2]}
            valid={!errors.name}
            errMessage={errors?.name?.message?.toString()}
            addBorderCls="py-1"
          />
          <InputText
            input={{
              ...register("contact", {
                required: msgStr[2],
              }),
              type: "text",
              placeholder: travelGuide[1],
            }}
            label={travelGuide[4]}
            valid={!errors.contact}
            errMessage={errors?.contact?.message?.toString()}
            addBorderCls="py-1"
          />
          <Button type="submit" theme="filled" className="w-full">
            {carRental[1]}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
