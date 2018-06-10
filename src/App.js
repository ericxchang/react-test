/* 
  @flow
*/
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome";
import Clock from "./components/clock";
import Message from "./components/Message";

type Props = {};
class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Welcome name="Eric">
          <Message>Hello</Message>
        </Welcome>
        <footer>
          <Clock />
        </footer>
      </div>
    );
  }
}

export default App;
