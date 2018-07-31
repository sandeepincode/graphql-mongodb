import query from './query';
import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
} from './actions';

const uri = '/graphql';

export function authenticate() {
  return async (dispatch) => {
    dispatch({
      type: FETCH_REQUEST,
    });
    try {

      return dispatch({
        type: FETCH_FAILURE,
      });

      fetch(uri, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
      })
        .then(r => r.json())
        .then((data) => {
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
