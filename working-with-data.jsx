const Card = function(props){
    return(
          <div style={{display: 'flex', marginBottom:'15px'}}>
                <img src={props.url} alt="" style={{width:'75px', height:'75px'}}/>
                <div style={{marginLeft:'15px'}}>
                    <h2 style={{fontSize:'1.5rem',margin:'0px'}}>{props.name}</h2>
                    <p style={{fontSize:'0.75rem'}}>{props.designation}</p>
                </div>
          </div>
    )
}

const CardList = function(props){
    return(
        <div>
            {props.cards.map(card => <Card {...card}/>)}
        </div>
    )
}


class Form extends React.Component{

state = {userName : ""}
handleEvent = (event) => 

{
		event.preventDefault();
   //console.log(this.userName.value);
   console.log(this.state.userName);
   
   axios.get(`https://api.github.com/users/${this.state.userName}`)
   .then(resp=>{
      
      
       this.props.onSubmit(
       			{
               name:resp.data.name,
               designation:resp.data.location,
               url:resp.data.avatar_url
       			}
       )
   })
}

handleChange = (event) =>{
this.setState({userName:event.target.value})
}

    render(){
        return(
                <form onSubmit={this.handleEvent} style={{marginBottom:'1rem'}}>
                <input type="text" value={this.state.userName} onChange={this.handleChange}/>
                  <button>Add user</button>
                </form>
        )
    }
}

class App extends React.Component{
        state = {
            cards: [
                  {
                    name:'Shan Dhiviyarajan',
                    designation:'UI/UX Designer',
                    url:'https://avatars.githubusercontent.com/u/4089349'
                  },
                  {
                    name:'Nirupa Shanmuganathan',
                    designation:'Fashion Designer',
                    url:'https://avatars.githubusercontent.com/u/4047349'
                  },
                  {
                    name:'Fazeena Sheradde',
                    designation:'Interior Designer',
                    url:'https://avatars.githubusercontent.com/u/4141'
                  }
            ]
        }
        
        addNewCard = (cardInfo) => {
            this.setState(prevState => ({
            		cards:prevState.cards.contact(cardInfo)
            }))
        }
        render(){
              return(
                <div>
                  <Form onSubmit={this.addNewCard}/>
                  <CardList cards={this.state.cards}/>
                </div>
              )
        }
}

ReactDOM.render(<App/>,mountNode)
