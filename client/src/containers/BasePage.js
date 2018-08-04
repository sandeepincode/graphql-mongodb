/* eslint-disable */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Redirect,
} from 'react-router-dom';
import Nav from '../components/BasePage/Nav';
import { authenticate } from '../redux/reducers/BasePage/authenticate';

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

class BasePage extends Component {

  componentWillMount() {
    if ( !this.props.data.auth ) {
      console.log ( 'Running Auth Test!' );
      // this.props.authenticate();
    }
  }

  render() {

    const isPathAuth = ['/login', '/register'].includes(this.props.location.pathname);

    if ( !this.props.data.auth && !isPathAuth ) {
      return (
        <Redirect to={'/login'}/>
      );
    }

    if ( this.props.data.auth && isPathAuth ) {
      return (
        <Redirect to={'/home'}/>
      );
    }

    return (
      <Nav>
        {this.props.children}
      </Nav>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasePage);
