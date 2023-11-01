import { useAppSelector } from "@/app/hooks";

interface NoDataProps {
  wrapperCls?: string;
  content?: string;
}
export function NoData({ wrapperCls, content }: NoDataProps) {
  const {
    messages: { common },
  } = useAppSelector((state) => state.language.lang);
  return (
    <div
      className={`flex h-full min-h-[200px] w-full flex-col items-center justify-center ${
        wrapperCls ?? ""
      }`}
    >
      <span className="py-4 text-desc">{content ?? common[0]}</span>
    </div>
  );
}
export default NoData;
