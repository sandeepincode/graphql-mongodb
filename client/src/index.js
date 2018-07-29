import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import './index.css';
import BasePage from './containers/basePage';
import HomePage from './containers/HomePage/HomePage';
import LoginPage from './containers/LoginPage/LoginPage';
import RegisterPage from './containers/RegisterPage/RegisterPage';
import NotFound from './containers/errorPage';

import configureStore from './redux/configureStore';
import history from './history';

const store = configureStore( history );

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history} basename="/">
        <Switch>
          <BasePage>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/home" component={HomePage} />
          </BasePage>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root') );


// <Route path="*" component={NotFound} />
