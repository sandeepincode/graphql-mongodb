import _ from 'lodash';
import { createApolloFetch } from 'apollo-fetch';
import simpleAction from '../../util/simpleAction';
import query from './query';

import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
} from './actions';

const uri = 'https://localhost:3009/graphql';
const apolloFetch = createApolloFetch({ uri });

export default function login() {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_REQUEST,
    });
    const { email, password } = getState().login.data.form;
    try {
      if (!_.isEmpty(email) || !_.isEmpty(password)) {
        const variables = { email, password };
        apolloFetch({ query, variables })
          .then(data => dispatch({
            type: FETCH_SUCCESS,
          }))
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
