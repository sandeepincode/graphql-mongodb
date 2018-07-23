import { createApolloFetch } from 'apollo-fetch';
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
    /* For Testings */
    return dispatch({
      type: FETCH_FAILURE,
      payload: 'WOOPS',
    });
    /** ************* */
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
        .catch(e => dispatch({
          type: FETCH_FAILURE,
          payload: e,
        }));
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
