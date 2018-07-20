import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './index.css';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import history from './history';

import BasePage from './containers/basePage';
import loginPage from './containers/login/loginPage';
import registerPage from './containers/register/registerPage';
import NotFound from './containers/errorPage';

// Redux
import store from './redux/store';

/* eslint-disable */
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <BasePage exact path="/">
        <Route exact path="/login" component={loginPage} />
        <Route path="/register" component={registerPage} />
      </BasePage>
    </Router>
  </Provider>
  , document.getElementById('root'));


// <Route path="*" component={NotFound} />
