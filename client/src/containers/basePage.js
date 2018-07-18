import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Nav from '../components/basePage/nav';
/* eslint-disable */
export default class basePage extends Component {

  componentWillMount() {
    // Test session is still active
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
