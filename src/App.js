import React, { Component } from 'react';
import logoReact from './react-logo.svg';
import logoElectron from './electron-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoReact} className="App-logo" alt="logoReact" />
          <img src={logoElectron} className="App-logo" alt="logoElectron" />
          <h1 className="App-title">Welcome to React on Electron</h1>
          <h4>ReactElectron starter pack</h4>
        </header>
        <p className="App-intro">
        to change the window property you can edit <code> src/electron-starter.js </code>.
        </p>
      </div>
    );
  }
}

export default App;
