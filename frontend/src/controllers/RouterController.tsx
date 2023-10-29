import AboutUsPage from "@/pages/AboutUsPage";
import HomePage from "@/pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
export default function RouterController() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
}
