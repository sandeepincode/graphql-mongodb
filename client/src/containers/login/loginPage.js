import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  login,
  updateEmail,
  updatePassword,
} from '../../redux/reducers/login/login';

function mapStateToProps({ login }) {
  const { ui, data } = login;
  return {
    ui: {
      loading: ui.loading,
    },
    data: {
      form: {
        email: data.email,
        password: data.password,
      },
      error: data.error,
      response: data.response,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
    updateEmail,
    updatePassword,
  }, dispatch);
}

class loginPage extends Component {
  render() {
    const { ui, data } = this.props;
    const error = data.error ? data.error : null;
    return (
      <div>
        <h2>EASY REACT REDUX</h2>
        <div>{error}</div>
        <input type='email' onChange={this.props.updateEmail}/>
        <input type='password' onChange={this.props.updatePassword}/>
        <button
          disabled={ui.loading}
          onClick={this.props.login}
        >
        FETCH
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);
