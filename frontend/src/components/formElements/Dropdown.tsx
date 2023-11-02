import { InputProps } from "@/@types/formElements";
import { useState } from "react";
import { svgs } from "../Image";
import NoData from "../NoData";

interface DropdownProps {
  icon?: JSX.Element;
  options: string[];
  onClick: (n: string) => void;
  input: InputProps;
  valid?: boolean;
  errMessage?: string | null;
}

export default function Dropdown({
  icon,
  options,
  onClick,
  input,
  valid = true,
  errMessage = null,
}: DropdownProps) {
  const [show, setShow] = useState(false);
  const borderCls = `border-2 ${valid ? "border-transparent" : "border-error"}`;
  const dropdownCls = `transition-all duration-250 absolute w-full rounded shadow-2xl top-10 z-10 bg-white flex flex-col py-2`;
  return (
    <div
      className="relative min-w-[200px] w-full"
      onClick={() => {
        setShow(!show);
      }}
    >
      <div
        className={`flex items-center gap-2 p-2 rounded cursor-pointer ${borderCls}`}
      >
        {icon ? <span className="h-4 w-4 text-primary">{icon}</span> : null}
        <input
          {...input}
          readOnly
          className="sm:text-base text-sm flex-1 outline-none cursor-pointer"
        />
        <span
          className={`h-4 w-4 text-grey shrink-0 transition-all duration-300 ${
            !show ? "" : "rotate-180"
          }`}
        >
          {svgs.chevron_down}
        </span>
      </div>
      {options && options.length > 0 ? (
        <ul
          className={`${dropdownCls} gap-2  ${
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
                  onClick(o);
                  setShow(false);
                }}
                className="cursor-pointer hover:bg-option-touch pl-6 py-2 pr-2"
              >
                <span>{o}</span>
              </li>
            ))}
        </ul>
      ) : (
        <div
          className={`${dropdownCls} ${
            show ? "h-fit" : "h-0 opacity-0 pointer-events-none"
          }`}
          onMouseLeave={() => {
            setShow(false);
          }}
        >
          <NoData />
        </div>
      )}

      {!valid && errMessage && (
        <sub className="absolute left-0 top-12 italic text-xs text-error">{`*${errMessage}`}</sub>
      )}
    </div>
  );
}
