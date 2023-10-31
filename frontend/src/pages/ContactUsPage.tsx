import { useAppSelector } from "@/app/hooks";
import PageContainer from "@/containers/PageContainer";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  const { contactUs, email, phone, app_name } = useAppSelector(
    (state) => state.language.lang
  );
  return (
    <PageContainer title="Contact Us">
      <section className="mt-4 py-4 content-container flex flex-col gap-4">
        <h1>{contactUs[0]}</h1>
        <p className="text-top-desc mt-4">
          <span>{contactUs[1]}</span>
          <Link to={"/"} className="font-bold clickable-text pl-1">
            {app_name}
          </Link>
          <span>{contactUs[2]}</span>
        </p>
        <div className="w-full flex flex-col gap-4">
          <h2 className="mt-4">{email[0]}</h2>
          <p className="text-desc">
            <span>{email[1]}</span>
            <a className="clickable-text px-1" href={`mailto:${email[2]}`}>
              {email[2]}
            </a>
            <span>{email[3]}</span>
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h2 className="mt-4">{phone[0]}</h2>
          <p className="text-desc">
            <span>{phone[1]}</span>
            <a className="clickable-text px-1" href={`tel:${phone[2]}`}>
              {phone[2]}
            </a>
            <span>{phone[3]}</span>
          </p>
          <p className="text-desc">{phone[4]}</p>
          <p className="text-desc">{phone[5]}</p>
        </div>
      </section>
    </PageContainer>
  );
}
