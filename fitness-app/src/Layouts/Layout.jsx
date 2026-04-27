import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Layout() {
  return (
    <>
      <div className="bg-linear-to-l from-white via-red-100 h-screen to-red-200 items-center flex  flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
