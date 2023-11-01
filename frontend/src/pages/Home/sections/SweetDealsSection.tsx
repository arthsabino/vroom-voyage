import { Car } from "@/@types/car";
import { useAppSelector } from "@/app/hooks";
import NoData from "@/components/NoData";
import CarsCard from "@/components/cars/CarsCard";
import { API_URL } from "@/lib/consts";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SweetDealsSection() {
  const {
    messages: { common },
    landing: { sweetDeals },
  } = useAppSelector((state) => state.language.lang);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      await axios.get(API_URL.getFeaturedCars).then((res) => {
        if (res && res.data) {
          setCars(res.data);
        }
      });
    };

    fetchCars();
  }, []);
  return (
    <section className="mt-4 content-container flex flex-col">
      <h2 className="text-black text-center my-8">{sweetDeals[0]}</h2>
      <p className="text-sm md:text-base font-normal text-desc">
        {sweetDeals[1]}
      </p>
      {cars.length > 0 ? (
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-12 gap-4 w-full place-items-center">
          {cars.map((c) => (
            <CarsCard car={c} key={c.id} />
          ))}
        </div>
      ) : (
        <NoData content={common[0]} />
      )}
    </section>
  );
}
