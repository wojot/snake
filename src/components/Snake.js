import React from "react";

export default function Snake({ snakeCoords }) {
  return (
    <div>
      {snakeCoords.map((coord, index) => {
        const style = {
          left: coord[0] * 5 + "%",
          top: coord[1] * 5 + "%"
        };

        return <div key={index} className="snakePiece" style={style}></div>;
      })}
    </div>
  );
}
