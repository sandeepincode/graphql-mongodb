import update from 'immutability-helper';
import {
  OPEN_NAV,
  CLOSE_NAV,
  REDIRECT_NAV,
} from './actions';
import simpleAction from '../../util/simpleAction';

const initialState = {
  ui: {
    loading: false,
    open: false,
  },
  data: {
    page: 'home',
  },
};

export const redirectNav = simpleAction(REDIRECT_NAV);

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_NAV:
      return update(state, {
        ui: {
          open: { $set: true },
        },
      });
    case CLOSE_NAV:
      return update(state, {
        ui: {
          open: { $set: false },
        },
      });
    case REDIRECT_NAV:
      return update(state, {
        data: {
          page: { $set: payload },
        },
      });
    default:
      return state;
  }
}
