import { twMerge } from "tailwind-merge";

interface CarDescProps {
  title?: string | null;
  titleCls?: string;
  icon: JSX.Element;
  desc: string | number;
  wrapperCls?: string;
  iconCls?: string;
  textCls?: string;
}

export function CarDesc({
  title = null,
  titleCls,
  icon,
  desc,
  wrapperCls,
  iconCls,
  textCls,
}: CarDescProps) {
  return (
    <div className={twMerge("flex items-center gap-2", wrapperCls)}>
      <span className={twMerge("h-4 w-4 text-desc", iconCls)}>{icon}</span>
      {title && (
        <span className={twMerge("text-xs font-semibold", titleCls)}>
          {title}:
        </span>
      )}
      <span className={twMerge("text-xs", textCls)}>{desc}</span>
    </div>
  );
}
