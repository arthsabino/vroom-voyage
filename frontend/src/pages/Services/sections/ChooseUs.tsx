import { useAppSelector } from "@/app/hooks";

export default function ChooseUs() {
  const {
    services: { chooseUs },
  } = useAppSelector((state) => state.language.lang);
  return (
    <section className="mt-8 py-8 bg-alt-surface">
      <div className="content-container flex flex-col">
        <h2 className="self-center">{chooseUs[0]}</h2>
        <ul className="mt-6 flex flex-col gap-4 w-full">
          {chooseUs.slice(1).map((c, index) => (
            <li key={`choose-us-${index}`}>
              <p>
                <span className="font-bold mr-2">{c[0]}</span>
                <span className="sm:mt-0 mt-2 text-top-desc">{c[1]}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
