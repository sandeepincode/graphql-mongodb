import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export default class basePage extends Component {
  render() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <div>EXAMPLE NAV</div>
      { this.props.children }
    </MuiThemeProvider>
    );
  }
}
