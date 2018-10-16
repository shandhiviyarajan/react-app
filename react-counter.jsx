class Button extends React.Component{

	constructor(props){
		super(props);
		this.state = {counter:9};
	}
  
  
  increaseCounter = ()=> {
  		
      this.setState((prevState)=>{
      return{
      counter:prevState.counter+1
      }
      }    
      )
  }
  
render(){
return(
		<button onClick={this.increaseCounter}>{this.state.counter}</button>
		)
}

}
ReactDOM.render(<Button/>,mountNode)
