import { ReactNode } from "react";

interface InfoBoxProps {
  title: string;
  icon: JSX.Element;
  children: ReactNode;
}
export default function InfoBox({ title, icon, children }: InfoBoxProps) {
  return (
    <div className="flex-col flex items-center">
      <h3 className="font-semibold text-lg xl:text-3xl sm:text-xl md:text-2xl text-center md:min-h-[4rem]">
        {title}
      </h3>
      <span className="h-24 w-24 text-primary my-4 md:my-6">{icon}</span>
      <div className="border-2 shadow-lg py-6 px-4 flex flex-col rounded-lg items-center text-left text-sm min-h-[12rem] max-w-xs text-desc">
        {children}
      </div>
    </div>
  );
}
