import { useAppSelector } from "@/app/hooks";
import PageContainer from "@/containers/PageContainer";

export default function AboutUsPage() {
  const { aboutUsPage: aboutUs } = useAppSelector(
    (state) => state.language.lang
  );
  return (
    <PageContainer title="About Us">
      <section className="content-container flex flex-col gap-8 w-ful">
        <h1>{aboutUs[0]}</h1>
        <div className="w-full text-top-desc flex flex-col gap-4">
          <p>{aboutUs[1]}</p>
          <p>{aboutUs[2]}</p>
        </div>
        <div className="w-full">
          <h2>{aboutUs[3]}</h2>
          <ul className="list-disc flex flex-col gap-4 list-inside mt-4 text-desc">
            <li>{aboutUs[4]}</li>
            <li>{aboutUs[5]}</li>
            <li>{aboutUs[6]}</li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h2>{aboutUs[7]}</h2>
          <ul className="list-disc gap-4 flex flex-col list-inside mt-4 text-desc">
            <li>
              <span>
                <span className="font-bold mr-2">{aboutUs[8]}</span>
                <span>{aboutUs[9]}</span>
              </span>
            </li>
            <li>
              <span>
                <span className="font-bold mr-2">{aboutUs[10]}</span>
                <span>{aboutUs[11]}</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h2>{aboutUs[12]}</h2>
          <ul className="list-inside list-decimal flex flex-col gap-4 text-desc">
            <li>
              <span>
                <span className="font-bold mr-2">{aboutUs[13]}</span>
                <span>{aboutUs[14]}</span>
              </span>
            </li>
            <li>
              <span>
                <span className="font-bold mr-2">{aboutUs[15]}</span>
                <span>{aboutUs[16]}</span>
              </span>
            </li>
            <li>
              <span>
                <span className="font-bold mr-2">{aboutUs[17]}</span>
                <span>{aboutUs[18]}</span>
              </span>
            </li>
          </ul>
        </div>
        <p className="w-full mt-4">{aboutUs[19]}</p>
      </section>
    </PageContainer>
  );
}
