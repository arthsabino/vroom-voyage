import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import NavSidebar from "./components/navigations/NavSidebar";
import Navbar from "./components/navigations/Navbar";
import RouterController from "./controllers/RouterController";

export default function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Navbar />
        <NavSidebar />
        <RouterController />
      </div>
    </HelmetProvider>
  );
}
