
import React, {Component} from 'react';
import App from './App';
import configureStore from './configureStore'
import {Provider} from 'react-redux';

class Setup extends Component {
    constructor() {
        super();
        this.state = {
          store: configureStore(),
        };
    }
    render() {
      return (
          <Provider store={this.state.store}>
              <App store={this.state.store} />
          </Provider>
      );
    }
}

export default Setup;
