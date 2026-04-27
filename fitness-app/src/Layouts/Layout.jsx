import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Layout() {
  return (
    <>
      <div className="h-screen items-center flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
