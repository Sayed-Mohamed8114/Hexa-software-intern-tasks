import React from "react";
import BodyPart from "./BodyPart";

function HorizontalScrollBar({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div 
        key={item.id || item}
        itemID={item.id || item} 
        title = {item.id || item}
        >
            <BodyPart />
        </div>
      ))}
    </div>
  );
}

export default HorizontalScrollBar;
