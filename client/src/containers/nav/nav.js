import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { redirectNav } from '../../redux/reducers/nav/reducer';

function mapStateToProps({ nav }) {
  const { ui, data } = nav;
  return {
    ui: {
      loading: false,
      open: false,
    },
    data: {
      page: 'home',
    },
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    redirectNav,
  }, dispatch);
}

class nav extends Component {
  render() {
    return (
      <div> Testing Nav </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(nav);
