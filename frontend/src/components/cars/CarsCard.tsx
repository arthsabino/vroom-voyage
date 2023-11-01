import { Car } from "@/@types/car";
import { useAppSelector } from "@/app/hooks";
import { formatPrice } from "@/lib/format";
import { svgs } from "../Image";
import Button from "../buttons/Button";

interface CarsCardProps {
  car: Car;
}
export default function CarsCard({ car }: CarsCardProps) {
  const { car: carStr } = useAppSelector((state) => state.language.lang);
  return (
    <div className="rounded py-6 px-4 flex flex-col w-full shadow-2xl sm:max-w-full max-w-xs">
      <div className="flex justify-center">
        <img
          src={car.imgUrl}
          alt={car.displayName}
          height={175}
          width={250}
          className="object-cover rounded"
        />
      </div>
      <h4 className="mt-8 text-center">{car.displayName}</h4>
      <div className="flex items-center flex-wrap gap-4 font-semibold mt-2">
        <div className="border-r-2 border-r-desc pr-4 text-primary">
          <span className="text-primary text-lg">
            {formatPrice(car.ratePerDay)}
          </span>
          <span className="text-xs">{carStr[0]}</span>
        </div>
        <div className="text-desc font-semibold">
          <span className="text-lg">{formatPrice(car.ratePerMonth)}</span>
          <span className="text-xs">{carStr[1]}</span>
        </div>
      </div>
      <div className="h-[2px] bg-desc my-4" />
      <div className="flex flex-wrap gap-4 justify-between">
        <CarDesc icon={svgs.seat} desc={`${car.seat}-${carStr[2]}`} />
        <CarDesc icon={svgs.transmission} desc={car.transmission} />
        <CarDesc icon={svgs.petrol} desc={car.petrol} />
      </div>
      <Button theme="filled" className="mt-4 w-full">
        Rent Now
      </Button>
    </div>
  );
}

interface CarDescProps {
  icon: JSX.Element;
  desc: string | number;
}

function CarDesc({ icon, desc }: CarDescProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-4 w-4 text-desc">{icon}</span>
      <span className="text-xs">{desc}</span>
    </div>
  );
}
