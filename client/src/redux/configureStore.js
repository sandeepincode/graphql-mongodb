import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import basePageReducer from './reducers/BasePage/reducer';
import loginReducer from './reducers/LoginPage/reducer';
import registerReducer from './reducers/RegisterPage/reducer';
import navReducer from './reducers/Nav/reducer';

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
