import React, { Component } from 'react';
import { connect } from 'react-redux';
// import reducers and actions
import * as appActions from '../../reducers/app/actions';
// import dumb components

class Input extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  update( e ) {
    this.setState({
      text: e.target.value
    });
  }

  handleClick() {
    // console.log('Yo');

    if (this.state.text !== '') {
      let data = {
        text: this.state.text,
        locationX: this.props.locationX,
        locationY: this.props.locationY
      };
      this.props.addComment(data);
      this.props.setDisplayFalse();
    } else {
      alert('Comment can not be empty');
    }

  }

  render() {
    var inputBox = {
              display: this.props.locationX ? 'block' : 'none',
              position: 'absolute',
              left: this.props.locationX ? this.props.locationX + 'px' : 0,
              top: this.props.locationY ? this.props.locationY - 100 + 'px': 0
          };
          var button = {
                    display: this.props.locationX ? 'block' : 'none',
                    position: 'absolute',
                    left: this.props.locationX ? this.props.locationX + 130 + 'px' : 0,
                    top: this.props.locationY ? this.props.locationY - 100 + 'px': 0
                };
    return(
      <div>
        <input style={inputBox} type="text" onChange={this.update.bind(this)}/>
        <button type="button" style={button} onClick={this.handleClick.bind(this)}>Comment</button>
      </div>
    );
  }
}
// export default Input

function bindActions(dispatch) {
  return {
    addComment: (data) => dispatch(appActions.addComment(data)),
    setDisplayFalse: () => dispatch(appActions.setDisplayFalse()),
  };
}

function mapStateToProps(state) {
  // console.log(state, '*********state***********');
  return{
    // comments: state.app.comments
  };
};

export default connect(mapStateToProps, bindActions)(Input);
