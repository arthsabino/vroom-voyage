import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
interface LogoProps {
  className?: string;
  textCls?: string;
}
export default function Logo({ className, textCls }: LogoProps) {
  return (
    <Link
      to="/"
      className={twMerge("flex items-center gap-1 hover:opacity-75", className)}
    >
      <img src={logo} alt="Logo" height={40} width={40} />
      <span className={twMerge("text-black", textCls)}>VroomVoyage</span>
    </Link>
  );
}
