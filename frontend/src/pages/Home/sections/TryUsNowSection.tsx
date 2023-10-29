import { useAppSelector } from "@/app/hooks";
import { svgs } from "@/components/Image";
import Button from "@/components/buttons/Button";

export default function TryUsNowSection() {
  const {
    landing: { calendar },
  } = useAppSelector((state) => state.language.lang);
  return (
    <section className="mt-4 pb-12 flex flex-col items-center justify-center bg-gray-100 w-full">
      <h2 className="text-black text-center my-8">{calendar[2]}</h2>
      <div className="py-6 px-8 shadow-lg rounded bg-white sm:flex-row flex flex-col items-start sm:items-center gap-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="h-4 w-4 text-primary">{svgs.pin}</span>
          <span className="sm:text-base text-sm">{calendar[0]}</span>
          <span className="h-4 w-4 text-grey shrink-0 fill-none stroke-1 ">
            {svgs.chevron_down}
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="h-4 w-4 text-primary">{svgs.calendar}</span>
          <span className="sm:text-base text-sm">{calendar[1]}</span>
          <span className="h-4 w-4 text-grey shrink-0 fill-none stroke-1 ">
            {svgs.chevron_down}
          </span>
        </div>

        <Button theme="filled">Book your ride</Button>
      </div>
    </section>
  );
}
