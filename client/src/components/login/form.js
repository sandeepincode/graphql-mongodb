import react, { Component } from 'react';
/* eslint-disable */
export default class nav extends Component {
  constructor(props) {
		super(props);
	}

	render() {

    const { ui, data } = this.props;

		return (
			<div>

      <div>
        <input type='email' onChange={ (e) => { this.updateValue(e, 'email'); } }/>
      </div>

      <div>
        <input type='password' onChange={ (e) => { this.updateValue(e, 'password'); } }/>
      </div>

      <div>
        <button
          disabled={ ui.loading }
          onClick={ this.props.login }
        >
        FETCH
        </button>
      </div>

			</div>
		);
	}
}
