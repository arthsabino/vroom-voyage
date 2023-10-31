import { useAppSelector } from "@/app/hooks";
import rentCar from "@/assets/images/services/rent-car.avif";
import travelGuide from "@/assets/images/services/travel-guide.avif";
import { Link } from "react-router-dom";

export default function Offered() {
  const {
    services: { welcome },
    app_name,
  } = useAppSelector((state) => state.language.lang);
  return (
    <section className="mt-4 pt-4 pb-8 content-container flex flex-col">
      <h1 className="text-center">{welcome[0]}</h1>
      <p className="text-top-desc mt-4">
        <span>{welcome[2]}</span>
        <Link to={"/"} className="font-bold px-1 clickable-text">
          {app_name}
        </Link>
        <span>{welcome[3]}</span>
      </p>
      <h2 className="self-start mt-8">{welcome[1]}</h2>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-6">
        <ServicesOffered
          imgSrc={rentCar}
          title={welcome[4]}
          desc={welcome[5]}
        />
        <ServicesOffered
          imgSrc={travelGuide}
          title={welcome[6]}
          desc={welcome[7]}
        />
      </div>
    </section>
  );
}
interface ServicesOfferedProps {
  imgSrc: string;
  title: string;
  desc: string;
}
function ServicesOffered({ imgSrc, title, desc }: ServicesOfferedProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch items-start md:justify-start justify-center gap-1 shadow-xl bg-white w-full group hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className="w-full md:w-2/5">
        <img
          src={imgSrc}
          alt={title}
          className="w-auto h-full rounded-t-lg md:rounded-l-lg"
        />
      </div>
      <div className="flex-col flex p-4 w-full md:w-3/5 md:items-start items-center">
        <h4 className="group-hover:text-primary transition-all duration-300">
          {title}
        </h4>
        <p className="text-desc text-sm mt-4">{desc}</p>
      </div>
    </div>
  );
}
