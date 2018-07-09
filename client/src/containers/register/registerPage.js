import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { form } from '../../components/register';
import {
  register,
  updateValue,
} from '../../redux/reducers/register/register';

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
        <h2> Register Page Component</h2>
        <div>{ error }</div>
        <form { ...this.props } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(registerPage);
