import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from './youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Custom Video player</h1>
        </header>
        <Youtube/>
      </div>
    );
  }
}

export default App;
