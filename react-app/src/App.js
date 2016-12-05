import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Proj</h1>
        <div className="Body">
          <div className="leftBlock">
            asdlkfjlasdjfkls
          </div>
          <div className="rightBlock">
            <div className="cards">
              <div className="imgCircle"></div>
              <div className="badge">
                <div className="count">1</div>
              </div>
              <div>
                Rate: 
              </div>
              <div>
                Verdict:
              </div>
              <div className="button">Reply</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



// <div className="App">
//   <div className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h2>Yo</h2>
//   </div>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>