import { useAppSelector } from "@/app/hooks";
import PageContainer from "@/containers/PageContainer";

export default function ContactUsPage() {
  const { contactUs, email, phone } = useAppSelector(
    (state) => state.language.lang
  );
  return (
    <PageContainer title="Contact Us">
      <section className="mt-4 py-4 content-container flex flex-col gap-4">
        <h1>{contactUs[0]}</h1>
        <p className="text-top-desc mt-4">{contactUs[1]}</p>
        <div className="w-full flex flex-col gap-4">
          <h2 className="mt-4">{email[0]}</h2>
          <p className="text-desc">
            <span>{email[1]}</span>
            <a
              className="clickable-text px-1"
              href="mailto:arthjoseph.sabino@gmail.com"
            >
              {email[2]}
            </a>
            <span>{email[3]}</span>
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h2 className="mt-4">{phone[0]}</h2>
          <p className="text-desc">
            <span>{phone[1]}</span>
            <a className="clickable-text px-1" href="tel:09175213294">
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
