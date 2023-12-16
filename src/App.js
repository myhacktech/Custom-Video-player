import React, { Component } from 'react';
import './App.css';
import Youtube from './youtube';
import Sun from './sun.png';
import About from './about';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <About/>
<img src={Sun} className="App-logo">
  
</img>          <h1>Bhanu Production</h1>

<marquee>
<h1>Welcome to the Offical Portal</h1>

</marquee>
          <h1 className="App-title">Custom Video player</h1>
        </header>
        <Youtube/>
      </div>
    );
  }
}

export default App;
