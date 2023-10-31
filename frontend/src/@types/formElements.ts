import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export type InputProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement> &
    InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  type?: HTMLInputTypeAttribute | "textarea";
};

export type SelectDate = Date | null;

export type DateRange = SelectDate | [SelectDate, SelectDate];
