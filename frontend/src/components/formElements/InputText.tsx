import { InputProps } from "@/@types/formElements";
import { useState } from "react";

interface InputTextProps {
  input: InputProps;
  label: string;
  valid?: boolean;
  errMessage?: string | null;
}
export default function InputText({
  input,
  label,
  valid = true,
  errMessage = null,
}: InputTextProps) {
  const [isFocus, setIsFocus] = useState(false);
  const borderCls = `rounded border-2 ${
    valid ? (isFocus ? "border-primary" : "border-grey") : "border-error"
  }`;
  return (
    <div
      className="min-w-[200px] w-full flex flex-col gap-2"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      <label className="text-grey opacity-50">{label}</label>
      <div className={`p-4 ${borderCls}`}>
        <input
          {...input}
          className="sm:text-base text-sm outline-none w-full"
        />
      </div>
      {!valid && errMessage && (
        <sub className="italic text-xs text-error">{`*${errMessage}`}</sub>
      )}
    </div>
  );
}
