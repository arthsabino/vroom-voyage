import { useAppSelector } from "@/app/hooks";
import { svgs } from "@/components/Image";
import InfoBox from "@/components/box/InfoBox";

export default function HowItWorksSection() {
  const {
    landing: { steps, pickup },
  } = useAppSelector((state) => state.language.lang);
  return (
    <section className="mt-4 py-4 content-container flex flex-col">
      <h2 className="text-black text-center">{steps[0]}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-8 md:gap-12">
        <InfoBox title={steps[1]} icon={svgs.pin}>
          <p>{pickup[0]}</p>
          <ul className="flex flex-col gap-2 mt-4 list-inside list-disc w-full">
            {pickup.slice(1).map((p) => (
              <li key={p}>{p}</li>
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
  );
}
