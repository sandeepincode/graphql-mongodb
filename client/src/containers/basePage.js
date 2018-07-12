import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default class basePage extends Component {
  render() {
    return (
      < MuiThemeProvider >
        <div> THIS IS THE BASE PAGE PART</div>
        {this.props.children}
      </MuiThemeProvider >
    );
  }
}
