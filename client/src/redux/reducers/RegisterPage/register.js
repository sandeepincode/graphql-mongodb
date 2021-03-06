import _ from 'lodash';
import { push } from 'react-router-redux';
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

export function register() {
  return async (dispatch, getState) => {

    dispatch({
      type: FETCH_REQUEST,
    });

    const { email, firstName, secondName, password, passwordConf } = getState().register.data.form;

    try {
      if (_.isEmpty(email) || _.isEmpty(password)
        || _.isEmpty(passwordConf) || _.isEmpty(firstName) || _.isEmpty(secondName)) {
        return dispatch({
          type: FETCH_FAILURE,
          payload: ['Please enter all fields'],
        });
      }
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
        .then(response => {
          if (!_.isEmpty(response.errors)) {
            const errors = response.errors.map(e => {
              return e.message;
            });
            return dispatch({
              type: FETCH_FAILURE,
              payload: errors,
            });
          }

          if (_.isEmpty(response.data)) {
            return dispatch({
              type: FETCH_FAILURE,
              payload: ['No Data From Response'],
            });
          }

          const payload = _.get(response, 'data.createUser');
          if (payload) {
            dispatch({
              type: FETCH_SUCCESS,
              payload,
            });
            return dispatch(push('/home'));
          }
          return dispatch({
            type: FETCH_FAILURE,
            payload: ['Invalid Data Response'],
          });
        });

    } catch (e) {
      return dispatch({
        type: FETCH_FAILURE,
        payload: e,
      });
    }
  };
}
