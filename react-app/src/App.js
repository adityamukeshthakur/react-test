import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
// import reducers and actions
import * as appActions from './reducers/app/actions';
// import dumb components
import Input from './components/input';

class App extends Component {

  constructor() {
    super();
    this.state = {
      locationX: null,
      locationY: null,
    }
  }

  divClick( e )  {
    var x = e.pageX;
    var y = e.pageY;
    this.setState({
      locationX: x,
      locationY: y
    })
    // console.log(x,y);
  }

  render() {
    // console.log(this.props.comments, '******this.props.comments******');
    // console.log(this.state.text);
    return (
      <div className="App">
        <h1 className="Header">React Proj</h1>
        <div className="Body">

          <div className="leftBlock" ref="targetDiv" onClick={(e) => {
            this.props.setDisplayTrue();
            this.divClick(e);
          }} >

            {
              this.props.displayInput ?
              <Input ref="input" locationX={this.state.locationX} locationY={this.state.locationY} />
              :
              <div></div>
            }

            {
              this.props.comments.length === 0 ?
                <div></div>
              :
                this.props.comments.map((comment, i) => {
                  return <div className="badge" key={i} style={{
                    position: 'absolute',
                    left: comment.locationX ? comment.locationX + 'px' : 0,
                    top: comment.locationY ? comment.locationY - 100 + 'px': 0
                  }}>
                    <div className="count">{comment.badgeNo}</div>
                  </div>
                })
            }

          </div>

          <div className="rightBlock">
          {
            this.props.comments.map((comment, index) => {
              return(
                <div className="cards" key={index} >
                  <div className="imgCircle"></div>
                  <div className="badge">
                    <div className="count">{comment.badgeNo}</div>
                    <div>
                      {comment.text}
                    </div>
                  </div>
                  <div>
                    Rate:
                  </div>
                  <div>
                    Verdict:
                  </div>
                  <div className="button">Reply</div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

// export default App;

function bindActions(dispatch) {
  return {
    addComment: (data) => dispatch(appActions.addComment(data)),
    setDisplayTrue: () => dispatch(appActions.setDisplayTrue())
  };
}

function mapStateToProps(state) {
  // console.log(state, '*********state***********');
  return{
    comments: state.app.comments,
    displayInput: state.app.displayInput
  };
};

export default connect(mapStateToProps, bindActions)(App);


// <button type="button" onClick={() => this.handleClick()}>Comment</button>

//
// <br/><br/>
// <input type="text" onChange={this.update.bind(this)}/>
// <button type="button" onClick={this.handleClick.bind(this)}>Comment</button>
