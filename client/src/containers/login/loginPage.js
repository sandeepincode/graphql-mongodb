import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  login,
  updateValue,
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
    updateValue,
  }, dispatch);
}

class loginPage extends Component {

  updateValue = (event, type) => {
    console.log(type, event.target.value);
    const payload = {
      type,
      value: event.target.value,
    };
    this.props.updateValue(payload);
  };

  render() {
    
    const { ui, data } = this.props;
    const error = data.error ? data.error : null;

    return (
      <div>
        <h2>TEST APPLICATION</h2>
        <div>{ error }</div>
        <input type='email' onChange={ (e) => { this.updateValue(e, 'email'); } }/>
        <input type='password' onChange={ (e) => { this.updateValue(e, 'password'); } }/>
        <button
          disabled={ ui.loading }
          onClick={ this.props.login }
        >
        FETCH
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);
