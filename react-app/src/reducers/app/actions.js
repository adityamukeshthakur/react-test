// actions are where most of the business logic takes place
// they are dispatched by views or by other actions
// there are 3 types of actions:
//  async thunks - when doing asynchronous business logic like accessing a service
//  sync thunks - when you have substantial business logic but it's not async
//  plain object actions - when you just send a plain action to the reducer

// import _ from 'lodash';
import * as types from './actionTypes';
// import auth from '../../services/auth';
// import cloud from '../../services/cloud';

export function addComment(data) {
  // console.log('action');
  return {
    type: types.ADD_COMMENT,
    data: data
  }
}

export function setDisplayFalse() {
  // console.log('action');
  return {
    type: types.SET_DISPLAY_FALSE
  }
}

export function setDisplayTrue() {
  // console.log('action');
  return {
    type: types.SET_DISPLAY_TRUE
  }
}
