import { BookARideForm } from "@/@types/formData";
import { useAppSelector } from "@/app/hooks";
import Back from "@/components/buttons/BackBtn";
import PageContainer from "@/containers/PageContainer";
import { API_URL, bookARideDefaultValues as defaultValues } from "@/lib/consts";
import { useCarByShortName } from "@/lib/hooks";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CarDetails from "./CarDetails";

export default function BookCarPage() {
  const {
    messages: { bookRide: msgStr },
  } = useAppSelector((state) => state.language.lang);
  const { shortName } = useParams();

  const navigate = useNavigate();
  const { car } = useCarByShortName(shortName);
  const bookARideForm = useForm<BookARideForm>({
    defaultValues,
  });
  const { handleSubmit } = bookARideForm;
  const onSubmit = async (form: BookARideForm) => {
    const newForm: BookARideForm = { ...form, carId: car?.id };
    await axios.post(API_URL.createRent, newForm).then((res) => {
      if (res && res.data) {
        toast.success(msgStr[2]);
        navigate("/?booking=success");
      }
    });
  };
  return (
    <PageContainer title={car?.displayName ?? "Book A Ride"}>
      {car ? (
        <FormProvider {...bookARideForm}>
          <Back />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="content-container flex flex-col"
          >
            <h1 className="mt-4">{car.displayName}</h1>
            <div className="flex md:flex-row flex-col mt-8 w-full">
              <div className="w-full md:w-1/2">
                <img
                  className="h-auto w-full"
                  src={car.imgUrl}
                  alt={car.displayName}
                />
              </div>
              <CarDetails car={car} />
            </div>
          </form>
        </FormProvider>
      ) : null}
    </PageContainer>
  );
}
