import { useAppSelector } from "@/app/hooks";
import blob from "@/assets/images/util/blob.svg";
import { Link } from "react-router-dom";
import { svgs } from "../Image";
import Logo from "../Logo";
export default function Footer() {
  const { footer } = useAppSelector((state) => state.language.lang);

  return (
    <footer className="bg-secondary  text-white relative overflow-hidden">
      <img
        src={blob}
        alt="blob"
        className="h-[32rem] w-[52rem] absolute top-[-10rem] left-0 md:left-[-15rem]"
      />
      <nav className="content-container py-12 flex lg:flex-row items-start flex-col gap-8 z-10 relative">
        <div className="w-full lg:w-1/4 flex flex-col gap-2 items-center lg:text-left text-center lg:items-start">
          <Logo textCls="text-white" />
          <p className="text-gray-50 text-sm">{footer.title}</p>
        </div>
        <div className="w-full lg:w-3/4 grid lg:grid-cols-3 grid-cols-2 gap-8">
          {footer.footerLinks.map((link, index) => (
            <div key={`footer-cols-${index}`}>
              <h4>{link.header}</h4>
              <div className="h-[2px] bg-gray-50 my-4" />
              <ul className="list-none flex flex-col gap-2 items-start">
                {link.links.map((l) => (
                  <Link to={l[1]} className="text-sm clickable-text">
                    {l[0]}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-white">{footer.contact}</h4>
            <div className="h-[2px] bg-gray-50 my-4" />
            <ul className="list-none flex flex-col gap-4 items-start">
              <li>
                <a
                  className="flex items-center gap-2 clickable-text group"
                  href="tel:09175213294"
                >
                  <div className="rounded-full bg-primary p-2 group-hover:bg-primary-touch">
                    <span className="h-4 w-4 text-white">{svgs.phone}</span>
                  </div>
                  <span className="">+63 917 521 3294</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 clickable-text group"
                  href="mailto:arthjoseph.sabino@gmail.com"
                >
                  <div className="rounded-full bg-primary p-2 group-hover:bg-primary-touch">
                    <span className="h-4 w-4 text-white">{svgs.mail}</span>
                  </div>
                  <span>arthjoseph.sabino@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}
