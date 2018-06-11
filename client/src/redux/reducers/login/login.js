
import simpleAction from '../../../util/simpleAction';
import axios from 'axios';
import _ from 'lodash';

import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from './actions';


const fetchFailure = (FETCH_FAILURE);

export const updatePassword = simpleAction(UPDATE_PASSWORD);
export const updateEmail = simpleAction(UPDATE_EMAIL);

export default function login() {
  return async (dispatch, getState) => {
    simpleAction(FETCH_REQUEST);
    try {
      const { email, password } = getState().login.data.form;
      if (!_.isEmpty(email) || !_.isEmpty(password)) {
        const request = axios.post('/graphql', {
          email,
          password,
        });
        if (!_.isEmpty(response)) {
          return simpleAction(FETCH_SUCCESS, response);
        }
      }
      return simpleAction(FETCH_FAILURE);

      // hit graphql endpoint with data

    } catch (e) {
      return dispatch(fetchFailure('Something went wrong'));
    }
  };
}
