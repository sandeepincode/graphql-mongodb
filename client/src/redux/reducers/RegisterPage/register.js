import _ from 'lodash';
import { createApolloFetch } from 'apollo-fetch';
import simpleAction from '../../util/simpleAction';
import query from './query';

import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  UPDATE_VALUE,
} from './actions';

const uri = 'http://localhost:3009/graphql';
const apolloFetch = createApolloFetch({ uri });

export const updateValue = simpleAction(UPDATE_VALUE);

export function register() {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_REQUEST,
    });
    const { email, firstName, secondName, password, passwordConf } = getState().register.data.form;
    try {
      if (!_.isEmpty(email) || !_.isEmpty(password)) {
        if (password !== passwordConf) {
          return dispatch({
            type: FETCH_FAILURE,
            payload: 'Passwords Do Not Match',
          });
        }
        fetch('/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: {
              firstName,
              secondName,
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
      }
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
