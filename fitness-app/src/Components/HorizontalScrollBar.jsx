import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import l_arrow from "../assets/icons/left-arrow.png";
import r_arrow from "../assets/icons/right-arrow.png";
import "react-horizontal-scrolling-menu/dist/styles.css";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <button
      onClick={scrollPrev}
      className="flex items-center justify-center px-2 z-10 cursor-pointer"
    >
      <img src={l_arrow} alt="left arrow" className="w-10 h-10"/>
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <button
      onClick={scrollNext}
      className="flex items-center justify-center px-2 z-10 cursor-pointer"
    >
      <img src={r_arrow} alt="right arrow" className="w-10 h-10" />
    </button>
  );
};

function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {
  return (
    <div className="w-[75%] h-auto no-scrollbar items-center ">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}
      wrapperClassName="w-full"
      >
        {data.map((item) => (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            className="mx-10 my-10 flex items-center justify-center p-4"
          >
            {/* to make a body part look we will render the data of the body parts here to make it clickable and good looking*/}
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
}

export default HorizontalScrollBar;
