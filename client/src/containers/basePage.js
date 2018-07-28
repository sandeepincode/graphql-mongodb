/* eslint-disable */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Redirect,
} from 'react-router-dom';
import Nav from '../components/basePage/nav';
import { authenticate } from '../redux/reducers/basePage/authenticate';
import History from '../history';

function mapStateToProps({ base }) {
  const { ui, data } = base;
  return {
    ui: {
      loading: ui.loading,
    },
    data: {
      auth: data.auth,
      error: data.error,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticate }, dispatch);
}

class basePage extends Component {

    componentDidUpdate () {
      this.props.authenticate();
    }

    componentDidMount () {
    if (!this.props.data.auth && !['/LoginPage', '/RegisterPage'].includes(History.location.pathname)) {
        //   console.log('Inside The Statement');
        //   window.location.href = '/LoginPage';
      console.log ( 'here');
      return <Redirect to="/login"/>
    }
  }

  render() {
    return (
      <Nav>
        {this.props.children}
      </Nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(basePage);
