
import simpleAction from '../../../util/simpleAction';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import axios from 'axios';
import _ from 'lodash';

import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from './actions';

const uri = 'https://localhost3009/graphql';
const client = new ApolloClient({ uri });

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

export function graphqlLogin() {
  return async (dispatch, getState) => {
    simpleAction(FETCH_REQUEST);
    try {
      client.query({
        query: gql`
          query TodoApp {
            todos {
              id
              text
              completed
            }
          }
        `,
      })
        .then(data => return simpleAction(FETCH_SUCCESS, data));
        .catch(error => return simpleAction(FETCH_FAILURE, error));

    } catch {
      return simpleAction(FETCH_FAILURE);
    }
  }
}