import update from 'immutability-helper';
import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  UPDATE_VALUE,
} from './actions';

const initialState = {
  ui: {
    loading: false,
  },
  data: {
    auth: false,
    error: '',
  },
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_REQUEST: {
      return update(state, {
        ui: {
          loading: { $set: true },
        },
        data: {
          auth: { $set: false },
        },
      });
    }
    case FETCH_FAILURE: {
      return update(state, {
        ui: {
          loading: { $set: false },
        },
        data: {
          auth: { $set: false },
          error: { $push: payload },
        },
      });
    }
    case FETCH_SUCCESS: {
      return update(state, {
        ui: {
          loading: { $set: false },
        },
        data: {
          auth: { $set: true },
          error: { $set: '' },
        },
      });
    }
    default:
      return state;
  }
}
