import React, { Component } from 'react';
/* eslint-disable */
export default class form extends Component {
	render() {
		return (
			<div>
        <div>
          <input type='email' onChange={ (e) => { this.props.onChange(e, 'email'); } }/>
        </div>
        <div>
          <input type='password' onChange={ (e) => { this.props.onChange(e, 'password'); } }/>
        </div>
        <div>
          <button disabled={ this.props.disabled } onClick={ this.props.login }> FETCH </button>
        </div>
			</div>
		);
	}
}
