import React from "react";
import Banner from "../assets/images/banner.jpg";
import "../css/style.css";

function HeroBanner() {
  return (
    <div className="flex gap-10 my-15 justify-center p-5 ">
      <div className="flex flex-col gap-2 w-[35%] justify-center items-start">
        <h1 className=" bg-linear-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent font-serif text-5xl font-bold animation-border">
          Muscle Memory
        </h1>
        <p className="text-black text-3xl font-semibold font-serif">
          Pain , Gain <br className="mb-1.5"/> Repeat
        </p>
        <p className="text-red-800 text-xl font-medium font-stretch-75% font-serif">
          A strong physique and a well-groomed appearance are not optional or
          something you switch on and off when it feels convenient — they are a
          way of life, built through discipline, consistency, and daily choices
          that shape who you become over time.
        </p>
        <button
          className="bg-linear-to-r from-red-100 via-red-300  to-red-400 p-3 transition-all ease-linear duration-700 hover:opacity-60 hover:font-extrabold rounded-md text-red-950  text-xl font-bold font-serif mt-2 cursor-pointer"
          href="#exercises"
        >
          Explore more Exercises
        </button>
        <p className="font-bold bg-linear-to-b from-red-500/20 via-red-400/20 to-red-300/20 bg-clip-text text-transparent text-[200px] font-serif p-5">EXERCISES</p>
      </div>
      <div className="w-[40%]">
        <img
          src={Banner}
          alt="Banner"
          className="rounded-2xl w-full h-[50vh] shadow-xl shadow-black"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
