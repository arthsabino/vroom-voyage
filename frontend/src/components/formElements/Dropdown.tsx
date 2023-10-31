import { InputProps } from "@/@types/formElements";
import { useState } from "react";
import { svgs } from "../Image";

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
  return (
    <div
      className="relative min-w-[200px]"
      onClick={() => {
        setShow(!show);
      }}
    >
      <div
        className={`flex items-center gap-2 p-2 rounded-lg w-full cursor-pointer ${borderCls}`}
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
      <ul
        className={`transition-all duration-250 absolute w-full rounded-lg shadow-2xl top-10 z-10 bg-white flex flex-col gap-2 py-2 ${
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
      {!valid && errMessage && (
        <sub className="absolute left-0 top-12 italic text-xs text-error">{`*${errMessage}`}</sub>
      )}
    </div>
  );
}
