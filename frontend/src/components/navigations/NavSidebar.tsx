import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { toggle } from "@/features/sidebarSlice";
import { SCREENS } from "@/lib/consts";
import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { svgs } from "../Image";
import NavLinks from "./NavLinks";

export default function NavSidebar() {
  const show = useAppSelector((state) => state.sidebar.show);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery({ minWidth: SCREENS.md });
  const display = useMemo(() => show && !isDesktop, [show, isDesktop]);
  useEffect(() => {
    if (!show) {
      dispatch(toggle(false));
    }
  }, [show, dispatch]);
  return (
    <aside>
      <div
        className={`transition-all duration-300 fixed top-0 right-0 bg-gray-800 text-white h-screen ${
          display ? "w-48" : "w-0 opacity-0 pointer-events-none"
        } z-30 py-8 px-4 shadow-[5px_4px_18px_1px_rgb(31,41,55)]`}
      >
        <div className="relative" onClick={() => dispatch(toggle(false))}>
          <span className="h-3 w-3 absolute top-0 right-0 hover:text-grey cursor-pointer">
            {svgs.cross}
          </span>
        </div>
        <ul className="list-none gap-4 flex flex-col items-center pt-6">
          <NavLinks />
        </ul>
      </div>
      <div
        className={`fixed inset-0 z-20 bg-overlay-surface top-0 ${
          display ? "z-20" : "hidden"
        }`}
      />
    </aside>
  );
}
