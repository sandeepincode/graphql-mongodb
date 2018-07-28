import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import history from '../history';

import basePageReducer from './reducers/basePage/reducer';
import loginReducer from './reducers/login/reducer';
import registerReducer from './reducers/register/reducer';
import navReducer from './reducers/nav/reducer';

const reducers = combineReducers({
  base: basePageReducer,
  login: loginReducer,
  register: registerReducer,
  nav: navReducer,
});

let devTools = f => f;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const authorisation = () => {

};

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, routerMiddleware(history)), devTools),
);

export default store;
