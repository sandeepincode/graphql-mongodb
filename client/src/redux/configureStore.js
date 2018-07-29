import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

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


const configureStore = (browserHistory) => {

  let devTools = f => f;
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
  }

  return createStore(
    reducers,
    compose(applyMiddleware(thunk, routerMiddleware(browserHistory)), devTools),
  );
};

export default configureStore;
