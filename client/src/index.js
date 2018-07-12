import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
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

const theme = createMuiTheme({
  palette: {
      light: purple[300],
      primary: {
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});

/* eslint-disable */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Switch>
        <App>
          <Route exact path="/login" component={loginPage} />
          <Route exact path="/register" component={registerPage} />
          <Route path="*" component={NotFound} />
        </App>
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
