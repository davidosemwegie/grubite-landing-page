import React from 'react';
import logo from './assets/logo.svg';
import ig from './assets/ig.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p id="title">G R U B I T E</p>
        </div>
        <p>Our mission is to give you the best fully customized experience at every restaurant you go to.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Launching 2020</p>
        <a href="http://www.instagram.com/grubite">
          <img src={ig} className="IG-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;