import React, { Component } from "react";
import "./App.css";
import Snake from "./components/Snake";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default class App extends Component {
  state = { direction: null, snakeCoords: [], intervalId: null };

  componentDidMount() {
    this.startGame();
  }

  keyListener = event => {
    const keyCode = event.keyCode;
    if ((keyCode === 38 || keyCode === 87) && this.state.direction !== "DOWN") {
      this.setState({ direction: "UP" });
    } else if (
      (keyCode === 39 || keyCode === 68) &&
      this.state.direction !== "LEFT"
    ) {
      this.setState({ direction: "RIGHT" });
    } else if (
      (keyCode === 40 || keyCode === 83) &&
      this.state.direction !== "UP"
    ) {
      this.setState({ direction: "DOWN" });
    } else if (
      (keyCode === 37 || keyCode === 65) &&
      this.state.direction !== "RIGHT"
    ) {
      this.setState({ direction: "LEFT" });
    }
  };

  startGame = () => {
    const initialState = {
      direction: null,
      snakeCoords: [
        [1, 1],
        [2, 1]
      ]
    };
    this.setState(initialState);

    window.addEventListener("keydown", this.keyListener);
    const intervalId = setInterval(this.snakeRun, 300);
    this.setState({ intervalId });
  };

  snakeRun = () => {
    console.log(this.state);
    const direction = this.state.direction;
    if (direction) {
      let coords = this.state.snakeCoords;

      let newCoords = coords.map((piece, index, oryginalArr) => {
        let x = piece[0];
        let y = piece[1];
        const direction = this.state.direction;
        const head = index === oryginalArr.length - 1;

        if (head && !this.isSnakeInArea(x, y)) {
          this.gameOver("Snake is beyond area!");
        } else {
          if (head) {
            if (direction === "UP") {
              y -= 1;
            } else if (direction === "RIGHT") {
              x += 1;
            } else if (direction === "DOWN") {
              y += 1;
            } else if (direction === "LEFT") {
              x -= 1;
            }
          } else {
            [x, y] = oryginalArr[index + 1];
          }
        }

        return [x, y];
      });
      this.setState({ snakeCoords: newCoords });
    }
  };

  isSnakeInArea = (x, y) => {
    const max = 20;
    const min = 0;
    const direction = this.state.direction;
    if (direction === "UP" && y < min+1) return false;
    if (direction === "DOWN" && y > max-2) return false;
    if (direction === "LEFT" && x < min+1) return false;
    if (direction === "RIGHT" && x > max-2) return false;
    return true;
    // return x >= 0 && x < 20 && y >= 0 && y < 20 ? true : false;
  };

  gameOver = msg => {
    clearInterval(this.state.intervalId);
    confirmAlert({
      title: msg + " Would you like to play again?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.startGame()
        }
      ]
    });
  };

  render() {
    return (
      <div className="container">
      <h1 style={{color:"rgb(235, 235, 235)"}}>Score: {this.state.snakeCoords.length}</h1>
        <Snake snakeCoords={this.state.snakeCoords} />
      </div>
    );
  }
}
