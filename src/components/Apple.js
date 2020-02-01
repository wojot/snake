import React from "react";
import { FaApple } from "react-icons/fa";

export default function Apple({ appleCoords }) {
  const style = {
    left: appleCoords[0] * 5 + "%",
    top: appleCoords[1] * 5 + "%"
  };

  return (
    <div className="apple" style={style}>
      <FaApple className="apple-svg" />
    </div>
  );
}
