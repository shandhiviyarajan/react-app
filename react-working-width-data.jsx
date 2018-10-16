const Card = function(){

return(
<div style={{display: 'flex', marginBottom:'15px'}}>
  <img src="http://www.placehold.it/75" alt=""/>
  <div style={{marginLeft:'15px'}}>
  <h2 style={{fontSize:'1.5rem',margin:'0px'}}>
   Shan Dhiviyarajan
  </h2>
  <p style={{fontSize:'0.75rem'}}>
    Designer
  </p>
    
  </div>
</div>

)

}

const CardList = function(){

return(
		<div>
      <Card/>
    	<Card/>
    	<Card/>
		</div>
)
}

ReactDOM.render(<CardList/>,mountNode)
