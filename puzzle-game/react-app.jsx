import React from "react";
import ReactDOM from "react-dom";

const Author = () => {
  return <div>Authors</div>;
};

const Answer = props => {
  console.log(props.randomBooks);
  return <div>
    {
      props.randomBooks.map((n,i) => 
        <button key={i}>{n}</button>)
    }
  </div>;
};

class App extends React.Component {
  state = {
    randomBooks: [1, 2, 3, 4]
  };

  render() {
    return (
      <div>
        <Author />
        <Answer randomBooks={this.state.randomBooks} />
      </div>
    );
  }
}

const mountNode = document.getElementById("mountNode");
ReactDOM.render(<App />, mountNode);
