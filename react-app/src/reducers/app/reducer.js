// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './actionTypes';

const initialState = {
  comments: [],
  badgeNumber: 0
};

export default function reduce(state = initialState, action = {}) {
  // console.log(state, '%%%%%%%%%reducer:App%%%%%%%%');
  switch (action.type) {

    case types.ADD_COMMENT:  {
      // console.log('######reducer#####');
      // console.log(action.data, '*******action.data*********');
      state.badgeNumber++;
      // console.log(state.badgeNumber, '^^^^^^^state.badgeNumber^^^^^^^^^');
      let data = {
        text: action.data,
        badgeNo: state.badgeNumber
      };

      return {
        ...state, comments : [ ...state.comments, data]
      };
    }
    default:
      return state;
  }
}
