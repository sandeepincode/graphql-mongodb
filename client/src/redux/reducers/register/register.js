import _ from 'lodash';
import { createApolloFetch } from 'apollo-fetch';
import simpleAction from '../../../util/simpleAction';
import query from './query';

import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  UPDATE_VALUE,
} from './actions';

const uri = 'https://localhost:3009/graphql';
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

        if ( password !== passwordConf ) {
          return dispatch({
            type: FETCH_FAILURE,
            payload: 'Passwords Do Not Match',
          });
        }

        const requestData = {
          email, firstName, secondName, password, passwordConf,
        }

        apolloFetch({ query, requestData })
          .then((data) => {
            return dispatch({
              type: FETCH_SUCCESS,
              payload: data,
            });
          })
          .catch(e => dispatch({
            type: FETCH_FAILURE,
            payload: e,
          }));
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
