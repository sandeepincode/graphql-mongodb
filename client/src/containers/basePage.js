/* eslint-disable */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ authenticate }, dispatch);
}

class basePage extends Component {

  componentWillMount() {
    console.log( History.location.pathname );
    this.props.authenticate();
    // we need to mod the state to get it to update
    console.log ({
      auth: this.props.data.auth,
      loc: History.location.pathname,
      array: [ "/login", "/register" ].includes( History.location.pathname ),
    })

    if ( !this.props.data.auth && ![ "/login", "/register" ].includes( History.location.pathname ) ) {
      console.log( "Inside The Statement" );
      window.location.href="/login"
      // History.push( '/login' );
    } else {
      console.log ( 'Session Is Valid' );
    }
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        type: 'light',
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
        <Nav>
          { this.props.children }
        </Nav>
      </MuiThemeProvider>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( basePage );
