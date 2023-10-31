import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/navigations/Footer";
import NavSidebar from "./components/navigations/NavSidebar";
import Navbar from "./components/navigations/Navbar";
import RouterController from "./controllers/RouterController";

export default function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <NavSidebar />
        <RouterController />
        <Footer />
      </div>
    </HelmetProvider>
  );
}
