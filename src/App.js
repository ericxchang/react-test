import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Clock from './components/clock';
import Message from './components/Message';

class App extends Component {
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
        <footer><Clock /></footer>
      </div>
    );
  }
}

export default App;
