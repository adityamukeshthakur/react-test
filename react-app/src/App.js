import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
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

// export default App;

function bindActions(dispatch) {
  return {
    // createUser: (data) => dispatch(authActions.createUser(data)),
  };
}

function mapStateToProps(state) {
  console.log(state, '*********state***********');
  return{
    comments: state.app.comments
  };
};

export default connect(mapStateToProps,bindActions)(App);
