import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
const BTN_THEME = ["filled", "outline"];
interface ButtonProps {
  children: ReactNode;
  theme: (typeof BTN_THEME)[number];
  className?: string;
  type?: "submit" | "button";
}

export default function Button({
  children,
  theme = "filled",
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(
        `shadow-lg py-2.5 px-6 rounded text-sm min-w-[150px] transition-all duration-300 ${
          theme === BTN_THEME[0]
            ? "bg-primary text-white hover:bg-primary-touch"
            : "bg-transparent text-black text-sm border-secondary border hover:text-white hover:bg-secondary"
        } `,
        className
      )}
    >
      {children}
    </button>
  );
}
