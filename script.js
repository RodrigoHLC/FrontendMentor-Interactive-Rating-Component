class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      rating: "",
      value:"",
      submitted: false
    }
  this.rate=this.rate.bind(this)
  this.submit=this.submit.bind(this)
  }  
  rate=()=>{
    event.preventDefault();
    this.setState({
      rating: event.target.id,
      value: (()=>{switch(event.target.id){
      case "one":
      return "1";
      case "two":
      return "2";
      case "three":
      return "3";
      case "four":
      return "4";
      case "five":
      return "5"
    }})()
    })

     // event.preventDefault();
  }
  submit=()=>{
    this.setState(state =>({
      submitted: !this.state.submitted
    }))
  }

 
  
  render(){
   if(!this.state.submitted) {return <div>
     <form method="post" id="container" action="">
      <div id="card">
        <img id="star" src="./images/icon-star.svg"/>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div id="ratings">
            <Button id="one" num="1" rate={this.rate} selector={this.selector} rating={this.state.rating}  />
            <Button id="two" num="2" rate={this.rate} selector={this.selector} rating={this.state.rating}  />
            <Button id="three" num="3" rate={this.rate} selector={this.selector} rating={this.state.rating}  />
            <Button id="four" num="4" rate={this.rate} selector={this.selector} rating={this.state.rating}  />
            <Button id="five" num="5" rate={this.rate} selector={this.selector} rating={this.state.rating}  />
        </div>
        
        <input onClick={this.submit}  type="submit" id="submit" value="SUBMIT" />
      </div>
    </form> 
      </div>}
    
   else {return <div>
      <div id="card" style={{backgroundColor:"hsl(213, 19%, 22%)"}}>
        <img id="logo" src="./images/illustration-thank-you.svg"/>
        <p id="result">You selected {this.state.value} out of 5</p>
        <h1 id="TY-header">Thank you!</h1>
        <p id="TY-paragraph">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        
       </div>
     {/* <input onClick={this.submit} id="submit" value="BACK" style={{textAlign:"center"}}/>  */}
   </div>}
  }
}

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selected:false
    }
    this.selector=this.selector.bind(this)
  }
  selector=()=>{
    this.setState(state=>({
      selected:!this.state.selected
    }))
    event.preventDefault();
  }
  
  render(){return <div>
    {this.props.id!=this.props.rating ?
<button id={this.props.id} onClick={()=>{event.preventDefault(); this.selector();this.props.rate()}} className="grade"   >{this.props.num}</button>
      :     
<button id={this.props.id} onClick={()=>{event.preventDefault(); this.selector();this.props.rate()}} className="grade"  style={{color:"black", backgroundColor:"hsl(25,97%,53%)"}}  >{this.props.num}</button>}
  </div>
      }
}

ReactDOM.render(<App/>,document.getElementById("node"))