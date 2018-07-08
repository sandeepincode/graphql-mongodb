import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import loginPage from './containers/login/loginPage';
import registerPage from './containers/register/registerPage';

// Redux
import store from './redux/store';

/* eslint-disable */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename="/">
      <Switch>
        <Route exact path="/login" component={loginPage} />
        <Route exact path="/register" component={registerPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
