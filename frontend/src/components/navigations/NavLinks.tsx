import { Link } from "react-router-dom";

export default function NavLinks() {
  const links = [
    {
      content: "Home",
      href: "/",
    },
    {
      content: "Services",
      href: "/services",
    },
    {
      content: "Contact Us",
      href: "/contact-us",
    },
    {
      content: "About Us",
      href: "/about-us",
    },
  ];
  return (
    <>
      {links.map((l, index) => (
        <li key={`link-${index}`} className="group">
          <Link to={l.href} className="group-hover:text-grey">
            {l.content}
          </Link>
        </li>
      ))}
    </>
  );
}
