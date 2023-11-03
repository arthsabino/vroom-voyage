import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer
          className="min-w-fit text-sm md:text-base"
          position="top-center"
          limit={3}
          toastStyle={{
            backgroundColor: "rgb(31, 41, 55)",
            color: "#fff",
          }}
        />
        <Footer />
      </div>
    </HelmetProvider>
  );
}
