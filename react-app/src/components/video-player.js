import React,{Component} from 'react';
// import {connect} from 'react-redux';
import ReactPlayer from 'react-player'
import {bindActionCreators} from 'redux';

class VideoPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
          url: null,
          playing: true,
          volume: 0.8,
          played: 0,
          loaded: 0,
          duration: 0,
        };
    }

    render() {
        const {
          url, playing, volume,
          played, loaded, duration,
        } = this.state
        return (
            <ReactPlayer
               ref={player => { this.player = player }}
               width={360}
               height={210}
               url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
               playing={playing}
               volume={volume}
               controls
               onReady={() => console.log('onReady')}
               onStart={() => console.log('onStart')}
               onPlay={() => this.setState({ playing: true })}
               onPause={() => this.setState({ playing: false })}
               onBuffer={() => console.log('onBuffer')}
               onEnded={() => this.setState({ playing: false })}
               onError={e => console.log('onError', e)}
               onProgress={this.onProgress}
               onDuration={duration => this.setState({ duration })}
             />
        );
    }
}

// function mapStateToProps({}){
//     return {};
// }
//
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({},dispatch);
// }
export default VideoPlayer;
