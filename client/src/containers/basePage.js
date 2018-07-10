import { component } from 'react';

export default basePage extends component {
  render() {
    return (
      < MuiThemeProvider >
        {this.props.children}
      </MuiThemeProvider >
    );
  }
}
