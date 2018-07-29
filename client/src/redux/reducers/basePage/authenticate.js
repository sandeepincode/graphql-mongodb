import { createApolloFetch } from 'apollo-fetch';
import { push } from 'react-router-redux';
import query from './query';
import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
} from './actions';

const uri = 'https://localhost:3009/graphql';
const apolloFetch = createApolloFetch({ uri });

export function authenticate() {
  return async (dispatch) => {
    dispatch({
      type: FETCH_REQUEST,
    });

    try {
      apolloFetch({ query })
        .then((data) => {
          if (data.auth) {
            return dispatch({
              type: FETCH_SUCCESS,
            });
          }
          return dispatch({
            type: FETCH_FAILURE,
            payload: 'SERVER RESPONSE: Auth Failed',
          });
        })
        .catch(e => {
          return dispatch({
            type: FETCH_FAILURE,
            payload: e,
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
