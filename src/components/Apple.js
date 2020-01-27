import React, { Component } from "react";
import { FaApple } from "react-icons/fa";

export default class Apple extends Component {
  render() {
    const x = this.props.appleCoords[0] * 5;
    const y = this.props.appleCoords[1] * 5;

    const style = {
      left: `${x}%`,
      top: `${y}%`
    };

    return (
      <div className="apple" style={style}>
        <FaApple className="apple-svg" />
      </div>
    );
  }
}
