import React, { Component } from 'react';

export default class nav extends Component {
  constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
        <input type='email' placeholder='Email' onChange={ (e) => { this.updateValue(e, 'email'); } }/>
        <input type='text' placeholder='First Name' onChange={ (e) => { this.updateValue(e, 'firstName'); } }/>
        <input type='text' placeholder='Second Name' onChange={ (e) => { this.updateValue(e, 'secondName'); } }/>
        <input type='password' placeholder='Password' onChange={ (e) => { this.updateValue(e, 'password'); } }/>
        <input type='password' placeholder='Password Confirm' onChange={ (e) => { this.updateValue(e, 'passwordConf'); } }/>
        <button
          disabled={ this.props.ui.loading }
          onClick={ this.props.register }
        >FETCH</button>
			</div>
		);
	}
}
