import React from "react";
import logo from "../assets/icons/gym.png";

function BodyPart({ item, bodyPart, setBodyPart }) {
  const isActive = bodyPart === item;
  return (
    <button
      style={{
        width: "90px",
        height: "200px",
        borderBottomLeftRadius: "20px",
        borderTop: isActive ? "4px solid darkred " : "4px solid transparent",
        borderRadius: "15px",
      }}
      className="items-center  flex flex-col cursor-pointer pt-10 gap-3"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, behavior: "smooth" });
      }}
    >
      <img src={logo} alt="dummble" className="w-20 h-20" />
      <h2 className="bg-linear-to-r from-red-950 via-red-600 to-red-400 bg-clip-text text-transparent font-bold text-xl">
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </h2>
    </button>
  );
}

export default BodyPart;
