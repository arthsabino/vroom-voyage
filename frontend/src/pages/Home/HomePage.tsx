import PageContainer from "@/containers/PageContainer";
import AboutUsSection from "./sections/AbouUsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import SweetDealsSection from "./sections/SweetDealsSection";
import TopSection from "./sections/TopSection";
import TryUsNowSection from "./sections/TryUsNowSection";
export default function HomePage() {
  return (
    <PageContainer title="Home">
      <div className="content-container flex flex-col">
        <TopSection />
      </div>
      <TryUsNowSection />
      <HowItWorksSection />
      <AboutUsSection />
      <SweetDealsSection />
    </PageContainer>
  );
}
