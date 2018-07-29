import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from '../../components/RegisterPage/Form';
import {
  register,
  updateValue,
} from '../../redux/reducers/RegisterPage/register';

function mapStateToProps({ register }) {
  const { ui, data } = register;
  return {
    ui: {
      loading: ui.loading,
    },
    data: {
      form: {
        email: data.email,
        firstName: data.firstName,
        secondName: data.secondName,
        password: data.password,
        passwordConf: data.passwordConf
      },
      error: data.error,
      response: data.response,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    register,
    updateValue,
  }, dispatch);
}

class registerPage extends Component {

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
        <div>{ error }</div>
        <Form
          onChange={ this.updateValue }
          disabled={ this.props.ui.disabled }
          register={ this.props.register }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(registerPage);
