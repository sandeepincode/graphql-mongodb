
import simpleAction from '../../../util/simpleAction';

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

      // hit graphql endpoint with data

    } catch (e) {
      return dispatch(fetchFailure('Something went wrong'));
    }
  };
}
