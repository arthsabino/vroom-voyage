import { TravelGuideForm } from "@/@types/formData";
import { useAppSelector } from "@/app/hooks";
import Button from "@/components/buttons/Button";
import InputText from "@/components/formElements/InputText";
import PageContainer from "@/containers/PageContainer";
import { travelGuideDefaultValues as defaultValues } from "@/lib/consts";
import { FormProvider, useForm } from "react-hook-form";

export default function TravelGuidePage() {
  const {
    btns,
    travelGuide,
    messages: { travelGuide: msgStr },
  } = useAppSelector((state) => state.language.lang);
  const travelGuideForm = useForm<TravelGuideForm>({
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = travelGuideForm;
  const onSubmit = (form: TravelGuideForm) => {
    console.log(form);
  };
  return (
    <PageContainer title="Travel Guide">
      <FormProvider {...travelGuideForm}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="content-container flex flex-col gap-4 mt-4 py-4"
        >
          <h1>{travelGuide[0]}</h1>
          <div className="gap-4 flex md:flex-row flex-col w-full">
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
            />
          </div>
          <InputText
            input={{
              ...register("location", {
                required: msgStr[1],
              }),
              type: "text",
              placeholder: travelGuide[1],
            }}
            label={travelGuide[3]}
            valid={!errors.location}
            errMessage={errors?.location?.message?.toString()}
          />

          <Button type="submit" theme="filled" className="w-full md:w-auto">
            {btns[2]}
          </Button>
        </form>
      </FormProvider>
    </PageContainer>
  );
}
