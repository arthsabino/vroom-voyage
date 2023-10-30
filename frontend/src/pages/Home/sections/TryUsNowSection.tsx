import { useAppSelector } from "@/app/hooks";
import { svgs } from "@/components/Image";
import Button from "@/components/buttons/Button";
import Dropdown from "@/components/formElements/Dropdown";
import { dateToMMDDYYY } from "@/lib/format";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
type SelectDate = Date | null;

type DateRange = SelectDate | [SelectDate, SelectDate];
export default function TryUsNowSection() {
  const {
    landing: { calendar, pickup },
  } = useAppSelector((state) => state.language.lang);

  const [selected, setSelected] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [displayDate, setDisplayDate] = useState<string | null>(null);
  useEffect(() => {
    if (
      dateRange &&
      !(dateRange instanceof Date) &&
      Array.isArray(dateRange) &&
      dateRange[0] &&
      dateRange[1]
    ) {
      setDisplayDate(
        `${dateToMMDDYYY(dateRange[0])} - ${dateToMMDDYYY(dateRange[1])}`
      );
    }
  }, [dateRange]);
  return (
    <section className="mt-4 pb-12 flex flex-col items-center justify-center bg-alt-surface w-full">
      <h2 className="text-black text-center my-8">{calendar[2]}</h2>
      <div className="py-6 px-8 shadow-lg rounded bg-white sm:flex-row flex flex-col items-start sm:items-center gap-8">
        <Dropdown
          icon={svgs.pin}
          options={pickup.slice(1)}
          selected={selected}
          setSelected={setSelected}
          placeholder={calendar[0]}
        />
        <div className="relative">
          <div
            className="flex items-center gap-2 min-w-[250px] cursor-pointer"
            onClick={() => {
              setShowCalendar(true);
            }}
          >
            <span className="h-4 w-4 text-primary">{svgs.calendar}</span>
            <span className="sm:text-base text-sm flex-1">
              {displayDate ?? calendar[1]}
            </span>
            <span className="h-4 w-4 text-grey shrink-0 ">
              {svgs.chevron_down}
            </span>
          </div>
          {displayDate && (
            <sub className="absolute left-0 opacity-50 top-6 italic text-xs text-desc">
              {"*MM/DD/YYYY"}
            </sub>
          )}
          {showCalendar && (
            <Calendar
              selectRange
              returnValue="range"
              onChange={(value, _) => {
                setDateRange(value);
                setShowCalendar(false);
              }}
              value={dateRange}
              className={`absolute top-8 left-0`}
            />
          )}
        </div>

        <Button theme="filled">Book your ride</Button>
      </div>
    </section>
  );
}
