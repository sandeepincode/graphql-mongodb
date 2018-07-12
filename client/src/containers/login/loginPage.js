import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from  '../../components/login/form';

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
        <h2>Register Page</h2>
        <div>{ error }</div>
        <Form
          onChange={this.updateValue}
          login={this.props.login}
          disabled={this.props.ui.loading}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(loginPage);
