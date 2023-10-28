import { useAppSelector } from "@/app/hooks";
import landingCar from "@/assets/images/landing/hi-ace.png";
import wigo from "@/assets/images/landing/wigo.png";
import blob from "@/assets/images/util/blob.svg";
import { svgs } from "@/components/Image";
import Button from "@/components/buttons/Button";
import InfoBox from "@/components/landing/InfoBox";
import PageContainer from "@/containers/PageContainer";
export default function HomePage() {
  const {
    landing: { top, calendar, steps, pickup, aboutUs },
  } = useAppSelector((state) => state.language.lang);
  return (
    <PageContainer title="Home">
      <div className="content-container flex flex-col">
        <section className="md:min-h-[500px] flex w-full mt-4 overflow-hidden">
          <div className="w-1/2">
            <h1 className=" sm:leading-snug lg:leading-normal xl:leading-relaxed">
              {top[0]}
            </h1>
            <p className="mt-4 md:mt-8 text-xs lg:text-sm xl:text-lg sm:max-h-full max-h-12 text-gray-800 overflow-hidden">
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
        <section className="mt-4 py-12 flex items-center justify-center bg-gray-100 w-full">
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
        <section className="mt-4 py-4">
          <h2 className="text-black text-center">{steps[0]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8 md:gap-4">
            <InfoBox title={steps[1]} icon={svgs.pin}>
              <p>{pickup[0]}</p>
              <ul className="flex flex-col gap-2 mt-4 list-inside list-disc w-full">
                {pickup.slice(1).map((p) => (
                  <li>{p}</li>
                ))}
              </ul>
            </InfoBox>
            <InfoBox title={steps[2]} icon={svgs.calendar}>
              <p>{steps[4]}</p>
            </InfoBox>
            <InfoBox title={steps[3]} icon={svgs.clock}>
              <p>{steps[5]}</p>
            </InfoBox>
          </div>
        </section>
      </div>
      <section className="mt-4 py-8 bg-gray-100 md:flex-row flex-col w-full flex flex-wrap items-center justify-center pt-4 pb-4 pr-7 pl-7 md:pl-0 md:pr-0">
        <div className="sm:w-auto sm:h-60 sm:ml-[-50px]">
          <img src={wigo} alt="Wigo" className="w-auto h-full" />
        </div>
        <div className="mt-4 md:w-1/2 flex flex-col md:ml-6 2xl:ml-16">
          <h3>{aboutUs[1]}</h3>
          <p className="md:max-w-2xl text-sm md:text-base text-gray-500 font-normal mt-4">
            {aboutUs[2]}
          </p>
        </div>
      </section>
    </PageContainer>
  );
}
