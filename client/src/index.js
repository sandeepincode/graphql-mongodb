import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';

import App from './containers/basePage';
import loginPage from './containers/login/loginPage';
import registerPage from './containers/register/registerPage';
import NotFound from './containers/errorPage';

// Redux
import store from './redux/store';

/* eslint-disable */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Switch>
        <App>
          <Route exact path="/login" component={loginPage} />
          <Route exact path="/register" component={registerPage} />
        </App>
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));


// <Route path="*" component={NotFound} />
