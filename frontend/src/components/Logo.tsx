import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-1 hover:opacity-75">
      <img src={logo} alt="Logo" height={40} width={40} />
      <span>Vroom Voyage</span>
    </Link>
  );
}
