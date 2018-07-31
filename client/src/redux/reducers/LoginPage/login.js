import _ from 'lodash';
import simpleAction from '../../util/simpleAction';
import query from './query';

import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  UPDATE_VALUE,
} from './actions';

const uri = '/graphql';

export const updateValue = simpleAction(UPDATE_VALUE);

export function login() {
  return async (dispatch, getState) => {

    dispatch({
      type: FETCH_REQUEST,
    });

    const { email, password } = getState().login.data.form;

    try {
      if (!_.isEmpty(email) || !_.isEmpty(password)) {
        return dispatch({
          type: FETCH_FAILURE,
          payload: 'Please fill in all fields',
        });
      }
      fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: {
            email,
            password,
          },
        }),
      })
        .then(r => r.json())
        .then(data => {
          if (!data) {
            return dispatch({
              type: FETCH_FAILURE,
              payload: 'No Data From Response',
            });
          }
          return dispatch({
            type: FETCH_SUCCESS,
            payload: data,
          });
        });
    } catch (e) {
      return dispatch({
        type: FETCH_FAILURE,
        payload: e,
      });
    }
    return dispatch({
      type: FETCH_FAILURE,
      payload: 'FAILED TRY CATCH',
    });
  };
}
