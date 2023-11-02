import { Branch } from "@/@types/util";
import { useAppSelector } from "@/app/hooks";
import { svgs } from "@/components/Image";
import CalendarDropdown from "@/components/formElements/CalendarDropdown";
import Dropdown from "@/components/formElements/Dropdown";
import { dateMMDDYYYYToTZ } from "@/lib/format";
import { useFormContext } from "react-hook-form";

interface FilterCarsProps {
  branchList: Branch[];
  confirmedDates?: [Date, Date][];
}
export default function FilterCars({
  branchList,
  confirmedDates,
}: FilterCarsProps) {
  const {
    landing: { calendar },
    messages: { bookRide },
  } = useAppSelector((state) => state.language.lang);

  const {
    register,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext();
  const travelDate = watch("travelDate");
  return (
    <>
      <Dropdown
        icon={svgs.pin}
        options={branchList.map((l) => l.name)}
        onClick={(sel) =>
          setValue("pickup", sel, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
        input={{
          ...register("pickup", {
            required: bookRide[0],
          }),
          type: "text",
          placeholder: calendar[0],
        }}
        valid={!errors.pickup}
        errMessage={errors?.pickup?.message?.toString()}
      />
      <CalendarDropdown
        defaultValue={
          travelDate
            ? [
                new Date(dateMMDDYYYYToTZ(travelDate?.split("-")[0] as string)),
                new Date(dateMMDDYYYYToTZ(travelDate?.split("-")[1] as string)),
              ]
            : null
        }
        input={{
          ...register("travelDate", {
            required: bookRide[1],
          }),
          type: "text",
          placeholder: calendar[1],
        }}
        valid={!errors.travelDate}
        errMessage={errors?.travelDate?.message?.toString()}
        onSelect={(sel) =>
          setValue("travelDate", sel, { shouldValidate: true })
        }
        confirmedDates={confirmedDates}
      />
    </>
  );
}
