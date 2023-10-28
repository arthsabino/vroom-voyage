import { useAppDispatch } from "@/app/hooks";
import { toggle } from "@/features/sidebarSlice";
import { svgs } from "../Image";
import Logo from "../Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const dispatch = useAppDispatch();
  return (
    <nav className="w-screen min-h-navh justify-center flex items-center fixed top-0 bg-white z-30">
      <div className="content-container justify-between">
        <Logo />
        <ul className="list-none hidden md:flex items-center gap-4">
          <NavLinks />
        </ul>
        <span
          className="h-4 w-4 md:hidden inline-block hover:text-grey"
          onClick={() => dispatch(toggle(true))}
        >
          {svgs.hamburger}
        </span>
      </div>
    </nav>
  );
}
