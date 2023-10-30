import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { toggle } from "@/features/sidebarSlice";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const { header } = useAppSelector((state) => state.language.lang);
  const hrefs = ["/", "/services", "/contact-us", "/about-us"];
  const dispatch = useAppDispatch();
  return (
    <>
      {header.map((l, index) => (
        <li key={`link-${index}`} className="group">
          <Link
            to={hrefs[index]}
            className="group-hover:text-grey"
            onClick={() => dispatch(toggle(false))}
          >
            {l}
          </Link>
        </li>
      ))}
    </>
  );
}
