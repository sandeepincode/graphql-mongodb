/* eslint-disable */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  Redirect,
} from 'react-router-dom';
import Nav from '../components/basePage/nav';
import { authenticate } from '../redux/reducers/BasePage/authenticate';
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

  componentWillMount() {
    if ( !this.props.data.auth ) {
      this.props.authenticate();
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

export default connect(mapStateToProps, mapDispatchToProps)(basePage);