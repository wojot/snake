import React, { Component } from "react";

export default class Snake extends Component {
  render() {
    return (
      <div>
        {this.props.snakeCoords.map((coord, index) => {
          const x = coord[0] * 5;
          const y = coord[1] * 5;
          const style = {
            left: `${x}%`,
            top: `${y}%`
          };

          return <div key={index} className="snakePiece" style={style}></div>;
        })}
      </div>
    );
  }
}
