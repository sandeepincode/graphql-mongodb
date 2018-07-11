import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default class basePage extends Component {
  render() {
    return (
      < MuiThemeProvider >
        {this.props.children}
      </MuiThemeProvider >
    );
  }
}
