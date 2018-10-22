import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Stars component
const Stars = function(props) {
  let stars = [];
  for (let i = 0; i < props.starNumbers; i++) {
    stars.push(<i key={i} className="fa fa-star" />);
  }

  return <div className="col-5">{stars}</div>;
};
// Numbers component
const Numbers = function(props) {
  let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //add selected class
  let addSelectedClass = function(number) {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return "used";
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
  };

  return (
    <div class="mt-4 text-center">
  <div class="card">
      <div class="card-body text-center">
        {arrayOfNumbers.map((number, i) => (
          <span
            key={i}
            className={addSelectedClass(number)}
            onClick={() => props.selectNumber(number)}
          >
            {number}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
};
//Button component
const Button = function(props) {
  let button;
  switch (props.answerCorrect) {
    case true:
      button = (
        <button onClick={props.acceptAnswer} class="btn btn-success btn-sm">
          Accept <i class="fa fa-check" />
        </button>
      );
      break;
    case false:
      button = (
        <button class="btn btn-danger">
          <i class="fa fa-times" />
        </button>
      );
      break;
    default:
      button = (
        <button
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.length === 0}
          class="btn btn-primary"
        >
          =
        </button>
      );
  }

  return (
    <div class="col-2">
    {button}
    <br /><br />
    <button class="btn btn-warning btn-small">
      <i class="fa fa-refresh"></i>
    </button>
  </div>)
 
};
//Answer component
const Answer = function(props) {
  return (
    <div class="col-5">
      {props.selectedNumbers.map(function(number, i) {
        return (
          <span onClick={() => props.unselectNumber(number)} key={i}>
            {number}
          </span>
        );
      })}
    </div>
  );
};
//Game component
class Game extends React.Component {
  state = {
    selectedNumbers: [],
    starNumbers: Math.floor(Math.random(9) * 10) + 1,
    answerCorrect: null,
    usedNumbers: []
  };

  selectNumber = clickedNumber => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return "";
    }

    if (this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
      return "";
    }

    this.setState(prevstate => ({
      answerCorrect: null,
      selectedNumbers: prevstate.selectedNumbers.concat(clickedNumber)
    }));
  };

  unselectNumber = unselectNumber => {
    this.setState(prevState => ({
      answerCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(
        number => number !== unselectNumber
      )
    }));
  };
  //check answer
  checkAnswer = () => {
    let calculated = this.state.selectedNumbers.reduce(function(a, c) {
      return a + c;
    }, 0);
    this.setState(prevState => {
      return {
        answerCorrect: prevState.starNumbers === calculated
      };
    });
  };

  //accepting an answer
  acceptAnswer = () => {
    this.setState(prevState => {
      return {
        answerCorrect: null,
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        starNumbers: Math.floor(Math.random(9) * 10) + 1
      };
    });
  };

  render() {
    const {
      selectedNumbers,
      starNumbers,
      answerCorrect,
      usedNumbers
    } = this.state; //fuck

    return (
      <div className="container">
        <h3>Play game</h3>
        <hr />
        <div className="row">
          <Stars starNumbers={starNumbers} />

          <Button
            checkAnswer={this.checkAnswer}
            selectedNumbers={selectedNumbers}
            answerCorrect={answerCorrect}
            acceptAnswer={this.acceptAnswer}
          />

          <Answer
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber}
          />
        </div>

        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
          usedNumbers={usedNumbers}
        />
      </div>
    );
  }
}

//App component
class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
