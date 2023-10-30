import { useAppSelector } from "@/app/hooks";
import wigo from "@/assets/images/landing/wigo.png";
export default function AboutUsSection() {
  const {
    landing: { aboutUs },
  } = useAppSelector((state) => state.language.lang);
  return (
    <section className="mt-4 py-4 sm:py-8 bg-alt-surface md:flex-row flex-col w-full flex flex-wrap items-center justify-center pr-7 pl-7 md:pl-0 md:pr-0">
      <div className="sm:w-auto sm:h-60 sm:ml-[-50px]">
        <img src={wigo} alt="Wigo" className="w-auto h-full" />
      </div>
      <div className="mt-4 md:w-1/2 flex flex-col md:ml-6 2xl:ml-16">
        <h3>{aboutUs[1]}</h3>
        <p className="md:max-w-2xl text-sm md:text-base text-desc font-normal mt-4">
          {aboutUs[2]}
        </p>
      </div>
    </section>
  );
}
