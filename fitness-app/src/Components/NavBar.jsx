import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
export default function Navbar() {
  return (
    <>
      <nav
        className="w-[90%] md:w-[80%] lg:w-[70%] h-[7vh] md:h-[10vh] items-center justify-between flex p-5 sticky top-0 z-50 bg-white/10 backdrop-blur-md
  border-b border-white/15
  shadow-md rounded-4xl  mt-2"
      >
        <Link to="/">
          <img src={Logo} alt="logo" className="w-8  md:w-12 h-8 md:h-12" />
        </Link>
        <ul className="flex gap-2 font-extrabold items-center justify-center text-sm md:text-lg  ">
          <Link to="/">
            <span className="border-transparent bg-linear-to-r from-red-950 via-red-600 to-red-400 bg-clip-text text-transparent text-center border-b-2 transition-all duration-700 ease-linear  border-offset-2 hover:border-red-950">
              Home
            </span>
          </Link>
          <a
            href="#exercises"
            className="border-transparent bg-linear-to-r from-red-950 via-red-600 to-red-400 bg-clip-text text-transparent text-center border-b-2 transition-all duration-700 ease-linear  border-offset-2 hover:border-red-950"
          >
            Exercises
          </a>
        </ul>
      </nav>
    </>
  );
}
