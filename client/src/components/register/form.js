import React, { Component } from 'react';
/* eslint-disable */
export default class form extends Component {
	render() {
		return (
			<div>
        <div>
          <input type='email' placeholder='Email' onChange={ (e) => { this.props.onChange(e, 'email'); } }/>
        </div>
        <div>
          <input type='text' placeholder='First Name' onChange={ (e) => { this.props.onChange(e, 'firstName'); } }/>
        </div>
        <div>
          <input type='text' placeholder='Second Name' onChange={ (e) => { this.props.onChange(e, 'secondName'); } }/>
        </div>
        <div>
          <input type='password' placeholder='Password' onChange={ (e) => { this.props.onChange(e, 'password'); } }/>
        </div>
        <div>
          <input type='password' placeholder='Password Confirm' onChange={ (e) => { this.props.onChange(e, 'passwordConf'); } }/>
        </div>
        <div>
          <button disabled={ this.props.disabled } onClick={ this.props.register } >FETCH</button>
        </div>
      </div>
		);
	}
}
