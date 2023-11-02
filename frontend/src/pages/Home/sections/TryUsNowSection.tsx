import { BookARideForm } from "@/@types/formData";
import { useAppSelector } from "@/app/hooks";
import { svgs } from "@/components/Image";
import Button from "@/components/buttons/Button";
import CalendarDropdown from "@/components/formElements/CalendarDropdown";
import Dropdown from "@/components/formElements/Dropdown";
import { bookARideDefaultValues as defaultValues } from "@/lib/consts";
import { useBranchList } from "@/lib/hooks";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function TryUsNowSection() {
  const navigate = useNavigate();
  const { branchList } = useBranchList();
  const {
    btns,
    landing: { calendar },
    messages: { bookRide },
  } = useAppSelector((state) => state.language.lang);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookARideForm>({
    defaultValues,
  });

  const onSubmit = (form: BookARideForm) => {
    const travelDate = (form.travelDate as string).split("-");
    navigate(
      `/services/car-rental?pickup=${form.pickup}&startDate=${travelDate[0]}&endDate=${travelDate[1]}`
    );
  };

  return (
    <section className="mt-4 pb-12 flex flex-col items-center justify-center bg-alt-surface w-full">
      <h2 className="text-black text-center my-8">{calendar[2]}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-6 px-8 shadow-lg rounded bg-white sm:flex-row flex flex-col items-start sm:items-center gap-8"
      >
        <Dropdown
          icon={svgs.pin}
          options={branchList.map((l) => l.name)}
          onClick={(sel) =>
            setValue("pickup", sel, { shouldValidate: true, shouldDirty: true })
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
        />

        <Button type="submit" theme="filled" className="text-xs">
          {btns[0]}
        </Button>
      </form>
    </section>
  );
}
