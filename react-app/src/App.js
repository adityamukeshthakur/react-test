import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Button>
        <Yo />
        Yo
        <Yo />
      </Button>
    );
  }
}

const Button = (props) => {
  console.log(props, '++++======+++++');
  return <button>{props.children}</button>
}

const Yo = () => {
  console.log('Yo');
  return (
    <div>
      <span>&hearts;</span>
    </div>
  )
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
