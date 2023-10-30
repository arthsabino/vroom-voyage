import { Dispatch, SetStateAction, useState } from "react";
import { svgs } from "../Image";

interface DropdownProps {
  icon?: JSX.Element;
  options: string[];
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
  placeholder: JSX.Element | string;
}

export default function Dropdown({
  icon,
  options,
  selected,
  setSelected,
  placeholder,
}: DropdownProps) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative min-w-[200px] flex items-center gap-2 cursor-pointer"
      onClick={() => {
        setShow(!show);
      }}
    >
      {icon ? <span className="h-4 w-4 text-primary">{icon}</span> : null}
      <span className="sm:text-base text-sm flex-1">
        {selected ?? placeholder}
      </span>
      <span
        className={`h-4 w-4 text-grey shrink-0 transition-all duration-300 ${
          !show ? "" : "rotate-180"
        }`}
      >
        {svgs.chevron_down}
      </span>
      <ul
        className={`transition-all duration-250 absolute w-full rounded-lg shadow-2xl top-8 bg-white flex flex-col gap-2 py-2 ${
          show ? "h-fit" : "h-0 opacity-0 pointer-events-none"
        }`}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        {show &&
          options.map((o, index) => (
            <li
              key={`options-${index}-${o}`}
              onClick={() => {
                setSelected(o);
                setShow(false);
              }}
              className="cursor-pointer hover:bg-option-touch pl-6 py-2 pr-2"
            >
              <span>{o}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
