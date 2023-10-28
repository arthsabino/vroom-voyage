import { useAppSelector } from "@/app/hooks";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const { header } = useAppSelector((state) => state.language.lang);
  const hrefs = ["/", "/services", "/contact-us", "/about-us"];
  return (
    <>
      {header.map((l, index) => (
        <li key={`link-${index}`} className="group">
          <Link to={hrefs[index]} className="group-hover:text-grey">
            {l}
          </Link>
        </li>
      ))}
    </>
  );
}
