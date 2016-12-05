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

export function actions() {
  console.log('######actions######');
  // return function (dispatch, getState) {
  //   dispatch({ type: types.TOGGLE_IS_LOADING_USER});
  //   return auth.signup(data)
  //   .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson, ' &&&&&&&&responseJson:auth.js&&&&&&&&');
  //       // filter this data to suit corresponding view
  //       if (responseJson.success) {
  //         console.log('suuccess');
  //         // const data = responseJson.data;
  //         // dispatch({ type: types.SIGNUP, data });
  //         // dispatch({ type: types.TOGGLE_IS_LOADING_USER});
  //       } else {
  //         console.log('error in creating user.');
  //       }
  //       console.log('signup finished');
  //     })
  //     .catch((error) => {
  //       console.log(error, '%%%%%%%%%%%error%%%%%%%%%');
  //     })
  //   .catch((err) => console.log(err, '$$$$$$$$$err$$$$$$$'));
  // };
}
