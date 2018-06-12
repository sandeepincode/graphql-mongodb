
import simpleAction from '../../../util/simpleAction';
import query from './query';
import { createApolloFetch } from 'apollo-fetch';
import axios from 'axios';
import _ from 'lodash';

import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from './actions';

const fetchFailure = (FETCH_FAILURE);

const uri = 'https://localhost:3009/graphql';
const apolloFetch = createApolloFetch({ uri });

export const updatePassword = simpleAction(UPDATE_PASSWORD);
export const updateEmail = simpleAction(UPDATE_EMAIL);

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
          .then(data => {
            console.log(data);
            return dispatch({
              type: FETCH_SUCCESS,
              payload: data
            });
          })
          .catch( e => {
            console.log(e);
            return dispatch({
              type:FETCH_FAILURE,
              payload: e
            })
            return simpleAction(FETCH_FAILURE, response);
          });
      }
      return simpleAction(FETCH_FAILURE);
    } catch (e) {
      return dispatch(fetchFailure('Something went wrong'));
    }
  };
}
