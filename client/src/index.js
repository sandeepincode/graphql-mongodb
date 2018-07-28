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
import history from './history';
import BasePage from './containers/basePage';
import LoginPage from './containers/LoginPage/LoginPage';
import RegisterPage from './containers/RegisterPage/RegisterPage';
import NotFound from './containers/errorPage';

// Redux
import store from './redux/store';

axios.interceptors.response.use ( response => {
  console.log({ response });
}, error => {
  console.log ({ error });
});

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
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
          </BasePage>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root') );


// <Route path="*" component={NotFound} />
