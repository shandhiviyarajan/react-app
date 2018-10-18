//Stars component
const Stars = function(props){

let stars = [];
    for(i=0; i < props.starNumbers; i++){
        stars.push(<i key={i} class="fa fa-star"></i>);
    }

    return(
        <div class="col-5">
            {stars}
        </div>
    )
}

// Numbers component
	const Numbers = function(props){
 	let arrayOfNumbers = [1,2,3,4,5,6,7,8,9];
 
 //add selected class
 addSelectedClass = function(number){
   if(props.selectedNumbers.indexOf(number) >= 0){
      return 'selected';
   }
 }
 
    return(
    <div class="card mt-4">
      <div class="card-body text-center">
       				{
              		arrayOfNumbers.map((number,i)=>
                			<span key={i} 
                        className={addSelectedClass(number)} 
                        onClick={()=>props.selectNumber(number)}>{number}
                      </span>
                  )
          		}
      </div>	
    </div>
    )
}

const Button = function(){
		return(
    		<div class="col-2">
    		  <button class="btn btn-primary"> = </button>
    		</div>
        
    	)
}
//Answer component
const Answer = function(props){
    return(
        <div class="col-5">
          {
          		props.selectedNumbers.map(function(number,i){
           			return(<span key={i}>{number}</span>);
           		})
          }
        </div>
    )
}

//Game component
class Game extends React.Component{


			state =  {
        selectedNumbers:[],
        starNumbers: Math.random(9)*10
      }
      
   
      
       selectNumber = function(clickedNumber){ 
       
       if(this.state.selectedNumbers.indexOf(clickedNumber)>=0){
       		return '';
       }
       
     			this.setState((prevstate) => ({
        			selectedNumbers : prevstate.selectedNumbers.concat(clickedNumber)
      		}));
      }
      
  
      render(){
            return(
                <div className={"container"}>
                   <h3>Play game</h3>
                     <hr/>
                    <div class="row">
                        <Stars starNumbers={this.state.starNumbers} />
                        <Button/>
                        <Answer selectedNumbers={this.state.selectedNumbers}/>
                    </div>
                    
                		<Numbers 
                    selectedNumbers={this.state.selectedNumbers} 
                    selectNumber={this.selectNumber.bind(this)}/>
                </div>
              )
      }
}

//App component
class App extends React.Component{
      render(){
              return(
                  <div>
                 		<Game/>
                  </div>
              )
          }
}

ReactDOM.render(<App/>,mountNode);
