import AboutUsPage from "@/pages/AboutUsPage";
import CarRentalPage from "@/pages/CarRental/CarRentalPage";
import ContactUsPage from "@/pages/ContactUsPage";
import HomePage from "@/pages/Home/HomePage";
import ServicesPage from "@/pages/Services/ServicesPage";
import TravelGuidePage from "@/pages/TravelGuide/TravelGuidePage";
import { Route, Routes } from "react-router-dom";
export default function RouterController() {
  return (
    <Routes>
      <Route path="/">
        <Route index={true} element={<HomePage />} />
        <Route path="services">
          <Route index={true} element={<ServicesPage />} />
          <Route path="car-rental" element={<CarRentalPage />} />
          <Route path="travel-guide" element={<TravelGuidePage />} />
        </Route>

        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
      </Route>
    </Routes>
  );
}
