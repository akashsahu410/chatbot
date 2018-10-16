import React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      flag: 1,
      message: [
        {
          name: "Robot",
          msg: "Welcome"
        }
      ]
    };
  }
  onChange = e => {
    this.setState({ input: e.target.value.toLowerCase() });
  };

  sendData = e => {
    e.preventDefault();

    this.setState(
      prevState => ({
        message: [
          ...prevState.message,
          { name: "Akash", msg: this.state.input }
        ]
      }),
      () => {
        let doc = document.getElementById("chat");
        doc.scrollTop = doc.scrollHeight;
      }
    );
    let result = "";
    let ob = this.state.input.split(" ").map(x => x);
    for (let i = 0; i < ob.length; i++) {
      if (ob[i] in this.props.data.phrases) {
        result += this.props.data.phrases[ob[i]] + "\n";
      }
    }

    if (result !== "") {
      this.setState(
        prevState => ({
          message: [...prevState.message, { name: "Robot", msg: result }]
        }),
        () => {
          console.log("entering");
          let doc = document.getElementById("chat");
          doc.scrollTop = doc.scrollHeight;
        }
      );
    } else {
      this.setState(prevState => ({
        message: [
          ...prevState.message,
          { name: "Robot", msg: "I am not getting" }
        ]
      }));
    }
    this.setState({ input: "" });
    console.log("state", this.state);
  };
  

  render() {
    return (
      <div>
        <div
          id="chat"
          className="chathistory"
          style={{ height: "81vh", overflowY: "scroll" }}
        >
          <ul className="collection" id="scroll" style={{ border: "none" }}>
            {/* <img src="//robohash.org/107378?set=set2&bgset=bg2&size=70x70" alt="107378" className="circle" /> */}
            {this.state.message.map(x => {
              return x.name === "Robot" ? (
                <li
                  className="collection-item avatar"
                  style={{
                    clear: "right",
                    width: "40%",
                    backgroundColor: "#ece5dd",
                    paddingLeft: 25,
                    paddingRight: 25
                  }}
                >
                  {/* <span style={{fontSize:"1.5rem",paddingLeft:10}}>{x.name}</span> */}
                  <p>
                    {/* <i className="prefix mdi-action-alarm" />
      <span className="message-date">{Date()}</span>
        <br /> */}
                    <span style={{ fontSize: "1.5rem" }}>{x.msg}</span>
                  </p>
                </li>
              ) : (
                <li
                  className="collection-item avatar"
                  style={{
                    float: "right",
                    width: "40%",
                    backgroundColor: "#dcf8c6",
                    paddingRight: 25,
                    paddingLeft: 25
                  }}
                >
                  {/* <span className="title">{x.name}</span> */}
                  <p>
                    {/* <i className="prefix mdi-action-alarm" />
      <span className="message-date">{Date()}</span>
        <br /> */}
                    <span style={{ fontSize: "1.5rem" }}>{x.msg}</span>
                  </p>
                </li>
              );
            })}
          </ul>
          {/* <input ref={(c) => this._input = c} /> */}
        </div>

        <div>
          <footer className="teal">
            <form className="container">
              <div className="row">
                <div className="input-field col s10" target="#focus">
                  <i className="prefix mdi-communication-chat" />
                  <input
                    type="text"
                    placeholder="Type your message"
                    onChange={this.onChange}
                    autoFocus
                    name="input"
                    value={this.state.input}
                  />
                  {/* <span className="chip left">
                    <img src="//robohash.org/503483?set=set2&bgset=bg2&size=70x70" />
                    <span>Akash</span>
                  </span> */}
                </div>
                <div className="input-field col s2">
                  <button
                    type="submit"
                    data-scroll-to="#id1"
                    data-scroll-focus="#id2"
                    data-scroll-speed="700"
                    data-scroll-offset="200"
                    className="waves-effect waves-light btn-floating btn-large"
                    onClick={this.sendData}
                  >
                    <i className="mdi-content-send" />
                  </button>
                </div>
              </div>
            </form>
          </footer>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("State", state);
  return {
    data: state
  };
};
export default connect(mapStateToProps)(Chat);
