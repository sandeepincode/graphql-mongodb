import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import form from  '../../components/login/form';

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

    console.log('about to render');

    const { ui, data } = this.props;
    const error = data.error ? data.error : null;

    return (
      <div>
        <h2>TEST APPLICATION</h2>
        <div>{ error }</div>
        <form { ...this.props }/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);
