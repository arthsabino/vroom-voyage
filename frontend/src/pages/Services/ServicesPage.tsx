import PageContainer from "@/containers/PageContainer";
import ChooseUs from "./sections/ChooseUs";
import Journey from "./sections/Journey";
import Offered from "./sections/Offered";

export default function ServicesPage() {
  return (
    <PageContainer title="Services">
      <Offered />
      <ChooseUs />
      <Journey />
    </PageContainer>
  );
}
