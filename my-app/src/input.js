import React from 'react'
class Input extends React.Component
{
    constructor(props){
        super(props);
        this.state={
          userinput:""
        }
    }
    onChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
    sendData=()=>{
      this.setState({msg:this.state.userinput})
      console.log("props",this.props.msg)
    }
    render(){
      return (
        <div>
         <footer className="teal">
            <form className="container">
        <div className="row">
      <div className="input-field col s10">
        <i className="prefix mdi-communication-chat" />
        <input type="text" placeholder="Type your message" onChange={this.onChange} name="userinput"/>
        <span className="chip left">
          <img src="//robohash.org/503483?set=set2&bgset=bg2&size=70x70" />
          <span>Akash</span>
        </span>
      </div>
      <div className="input-field col s2">
        <button type="submit" className="waves-effect waves-light btn-floating btn-large" onClick={this.sendData}>
          <i className="mdi-content-send" />
        </button>
      </div>
    </div>
  </form>
</footer>
        </div>
      );
    }
  }
  export default Input;