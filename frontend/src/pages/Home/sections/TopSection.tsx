import { useAppSelector } from "@/app/hooks";
import landingCar from "@/assets/images/landing/hi-ace.png";
import blob from "@/assets/images/util/blob.svg";
import Button from "@/components/buttons/Button";

export default function TopSection() {
  const {
    landing: { top },
  } = useAppSelector((state) => state.language.lang);
  return (
    <section className="md:min-h-[500px] flex w-full mt-4 py-4 overflow-hidden">
      <div className="w-1/2">
        <h1 className=" sm:leading-snug lg:leading-normal xl:leading-relaxed">
          {top[0]}
        </h1>
        <p className="mt-4 md:mt-8 text-xs lg:text-sm xl:text-lg sm:max-h-full max-h-12 text-top-desc overflow-hidden">
          {top[1]}
        </p>
        <div className="md:flex-row flex flex-col items-start md:items-center gap-4 mt-4">
          <Button theme="filled">Book your ride</Button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col relative mt-28 z-[-1]">
        <div className="sm:w-[27rem] sm:h-[23rem] sm:top-[-10rem] md:w-[30rem] md:top-[-9rem] md:-right-12 lg:w-[40rem] lg:max-h-[10rem] lg:rotate-[-25deg] w-[20rem] h-[9rem] right-[-3rem] top-[-9rem] z-[-1] rotate-[-30deg] absolute">
          <img src={blob} alt="blob" className="w-full h-auto max-h-max" />
        </div>
        <div className="sm:w-[25rem] sm:h-[16rem] md:h-[15rem] md:top-[-3rem] md:right-[-13rem] w-auto lg:w-[40rem] lg:h-[20rem] h-[9rem] md:w-[36rem] lg:top-0 lg:right-[-11rem] xl:right-[-8rem] right-[-4rem] top-[-5rem] absolute">
          <img
            className="w-auto h-full max-w-fit"
            src={landingCar}
            alt="Hi-Ace Van"
          />
        </div>
      </div>
    </section>
  );
}
