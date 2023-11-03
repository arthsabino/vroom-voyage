import { useAppSelector } from "@/app/hooks";
import { useNavigate } from "react-router-dom";
import { svgs } from "../Image";

export default function BackBtn() {
  const { btns } = useAppSelector((state) => state.language.lang);
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="flex items-center gap-2 self-start text-xs clickable-text cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
    >
      <span className="h-2 w-2 rotate-90">{svgs.chevron_down}</span>
      {btns[3]}
    </button>
  );
}
