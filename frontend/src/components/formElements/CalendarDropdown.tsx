import { DateRange, InputProps } from "@/@types/formElements";
import { dateToMMDDYYY } from "@/lib/format";
import { useState } from "react";
import Calendar from "react-calendar";
import { svgs } from "../Image";

interface CalendarDropdownProps {
  defaultValue?: DateRange;
  input: InputProps;
  valid?: boolean;
  errMessage?: string | null;
  onSelect: (n: string) => void;
}
export default function CalendarDropdown({
  input,
  valid = true,
  errMessage = null,
  defaultValue = null,
  onSelect,
}: CalendarDropdownProps) {
  const now = new Date();
  const [dateRange, setDateRange] = useState<DateRange>(defaultValue);
  const [showCalendar, setShowCalendar] = useState(false);
  const borderCls = `border-2 ${valid ? "border-transparent" : "border-error"}`;
  return (
    <div className="relative w-full">
      <div
        className={`flex items-center gap-2 p-2 min-w-[250px] rounded cursor-pointer ${borderCls}`}
        onClick={() => {
          setShowCalendar(!showCalendar);
        }}
      >
        <span className="h-4 w-4 text-primary">{svgs.calendar}</span>
        <input
          {...input}
          readOnly
          className="sm:text-base text-sm flex-1 outline-none cursor-pointer"
        />
        <span
          className={`h-4 w-4 text-grey shrink-0 transition-all duration-300 ${
            !showCalendar ? "" : "rotate-180"
          }`}
        >
          {svgs.chevron_down}
        </span>
      </div>
      {!valid && errMessage && (
        <sub className="absolute left-0 top-12 italic text-xs text-error">{`*${errMessage}`}</sub>
      )}
      {showCalendar && (
        <Calendar
          minDate={now}
          selectRange
          returnValue="range"
          onChange={(value, _) => {
            setDateRange(value);
            setShowCalendar(false);
            if (
              value &&
              !(value instanceof Date) &&
              Array.isArray(value) &&
              value[0] &&
              value[1]
            ) {
              onSelect(
                `${dateToMMDDYYY(value[0])} - ${dateToMMDDYYY(value[1])}`
              );
            }
          }}
          value={dateRange}
          className={`absolute top-12 left-0`}
        />
      )}
    </div>
  );
}
