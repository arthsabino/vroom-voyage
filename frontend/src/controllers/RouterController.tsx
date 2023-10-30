import AboutUsPage from "@/pages/AboutUsPage";
import ContactUsPage from "@/pages/ContactUsPage";
import HomePage from "@/pages/Home/HomePage";
import ServicesPage from "@/pages/Services/ServicesPage";
import { Route, Routes } from "react-router-dom";
export default function RouterController() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
}
