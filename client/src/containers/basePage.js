/* eslint-disable */
import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Nav from '../components/basePage/nav';
import { authenticate } from '../redux/reducers/basePage/authenticate';

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
    this.props.authenticate();
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
