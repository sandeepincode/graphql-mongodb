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
    form: {
      firstName: '',
      secondName: '',
      email: '',
      password: '',
      passwordConf: '',
    },
    error: '',
    response: [],
  },
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_REQUEST: {
      return update(state, {
        ui: {
          loading: { $set: true },
        },
      });
    }
    case FETCH_FAILURE: {
      return update(state, {
        ui: {
          loading: { $set: false },
        },
        data: {
          error: { $set: payload },
        },
      });
    }
    case FETCH_SUCCESS: {
      return update(state, {
        ui: {
          loading: { $set: false },
        },
        data: {
          response: { $set: payload },
        },
      });
    }
    case UPDATE_VALUE: {
      return update(state, {
        data: {
          form: {
            [payload.type]: { $set: payload.value },
          },
        },
      });
    }
    default:
      return state;
  }
}
