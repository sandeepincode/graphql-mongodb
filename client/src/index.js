import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';
import history from './history';
import loginPage from './containers/login/loginPage';

// Redux
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename="/">
      <Switch>
        <Route exact path="/" component={loginPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
