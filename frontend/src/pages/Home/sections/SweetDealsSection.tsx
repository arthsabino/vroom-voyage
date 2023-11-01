import { Car } from "@/@types/car";
import { useAppSelector } from "@/app/hooks";
import CarsCard from "@/components/cars/CarsCard";

export default function SweetDealsSection() {
  const {
    landing: { sweetDeals },
  } = useAppSelector((state) => state.language.lang);
  const testCar: Car = {
    id: "adawdawd",
    ratePerDay: 35,
    ratePerMonth: 1050,
    shortName: "wigo",
    make: "Wigo",
    imgUrl:
      "https://res.cloudinary.com/ajps-bucket/image/upload/v1698557745/vroom-voyage-images/lolybff54yypwv0qypfn.png",
    transmission: "Auto",
    displayName: "Toyota Wigo 4-seater",
    name: "Toyota Wigo 4-seater",
    seat: 4,
    model: "Wigo",
    petrol: "Gasoline",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return (
    <section className="mt-4 content-container flex flex-col">
      <h2 className="text-black text-center my-8">{sweetDeals[0]}</h2>
      <p className="text-sm md:text-base font-normal text-desc">
        {sweetDeals[1]}
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-12 gap-4 w-full place-items-center">
        <CarsCard car={testCar} />
        <CarsCard car={testCar} />
        <CarsCard car={testCar} />
        <CarsCard car={testCar} />
      </div>
    </section>
  );
}
