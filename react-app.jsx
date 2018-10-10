class Button extends React.Component {


    handleClick = () => {
        this.props.click(this.props.increase)
    }


    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.increase}
            </button>
        )
    }
}
const Result = (props) => {
    return (
        <div>{props.value}</div>
    )
};
class App extends React.Component {

    state = {counter: 0};

    increaseValue = (increaseValue) => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + increaseValue
            }
        });
    };

    render() {
        return (
            <div>
                <Button click={this.increaseValue} increase={5}/>
                <Button click={this.increaseValue} increase={10}/>
                <Button click={this.increaseValue} increase={15}/>
                <Result value={this.state.counter}/>
            </div>
        )
    };
}
ReactDOM.render(<App/>, mountNode);