import { useAppSelector } from "@/app/hooks";
import { Link } from "react-router-dom";

export default function Journey() {
  const {
    services: { journey },
    app_name,
  } = useAppSelector((state) => state.language.lang);
  return (
    <section className="mt-4 py-4">
      <div className="content-container flex flex-col">
        <div className="w-full">
          <h4 className="self-start">{journey[0]}</h4>
          <p className="text-desc mt-4">{journey[1]}</p>
        </div>
        <div className="w-full mt-8">
          <h4 className="self-start mt-4">{journey[2]}</h4>
          <p className="text-desc mt-4">{journey[3]}</p>
          <p className="text-desc mt-4">
            <span>{journey[4]}</span>
            <Link to={"/"} className="font-bold px-1 clickable-text">
              {app_name}
            </Link>
            <span>{journey[5]}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
