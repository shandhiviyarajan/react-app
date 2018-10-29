import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let _ = require("lodash");

const Number = function(props) {
  return (
    <div className="game-numbers">
      {props.gameNumbers.map((number, i) => <div key={i}>{number}</div>)}
    </div>
  );
};

const Timer = () => {
  return (
    <div className="game-timer">
      <p>Timer</p>
    </div>
  );
};

class Game extends React.Component {
  render() {
    return (
      <div className="game-container">
        <div id="a"> A </div>

        <div id="b"> B </div>
        <div id="c"> C </div>
        <div id="d"> D </div>

        <div id="e"> E </div>
        <div id="f"> F </div>
        <div id="g"> G </div>

        <div id="h"> H </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    gameNumbers: [1, 2, 3, 4, 5, 6, 7, 8]
  };

  render() {
    return (
      <div>
        <Timer />
        <Game />
        <Number gameNumbers={this.state.gameNumbers} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
