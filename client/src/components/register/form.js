import React, { Component } from 'react';
/* eslint-disable */
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import History from '../../history.js'

const styles = {
  card: {
    width: '40%',
		margin: '0 auto',
  },
  title: {
		width: 200,
		margin: '0 auto',
    marginBottom: 16,
    fontSize: 14,
  },
	textField: {
		margin: '0 auto',
		width: 200,
	},
	form: {
		margin: 40,
	},
	button: {
		margin: '0 5px',
	},
	buttons: {
		margin: '20px auto 0 auto',
	}
};

class form extends Component {
	render() {

		const { classes } = this.props;
		const bull = <span className={ classes.bullet }>•</span>;

		return (
			<div>
				<Card className={ classes.card }>
					<CardContent>
						<FormControl className={ classes.form }>
						<div className={ classes.title }>
							<Typography variant="headline" component="h1">
								Register
							</Typography>
						</div>

						<div>
							<TextField
								id="email-input"
								label="Email"
								className={ classes.textField }
								type="email"
								onChange={ (e) => { this.props.onChange(e, 'email'); } }
								margin="normal"
							/>
						</div>

						<div>
							<TextField
								id="firstName-input"
								label="firstName"
								className={ classes.textField }
								type="text"
								onChange={ (e) => { this.props.onChange(e, 'firstName'); } }
								margin="normal"
							/>
						</div>

						<div>
							<TextField
								id="secondName-input"
								label="secondName"
								className={ classes.textField }
								type="text"
								onChange={ (e) => { this.props.onChange(e, 'secondName'); } }
								margin="normal"
							/>
						</div>

						<div>
							<TextField
								id="password-input"
								label="Password"
								className={ classes.textField }
								type="password"
								onChange={ (e) => { this.props.onChange(e, 'password'); } }
								autoComplete="current-password"
								margin="normal"
							/>
						</div>

						<div>
							<TextField
								id="password-conf-input"
								label="PasswordConf"
								className={ classes.textField }
								type="password"
								onChange={ (e) => { this.props.onChange(e, 'passwordConf'); } }
								autoComplete="current-password"
								margin="normal"
							/>
						</div>

						<div className={ classes.buttons }>
							<Button
								variant="contained"
								color="primary"
								disabled={ this.props.disabled }
								onClick={ this.props.register }
								className={ classes.button }>
									Register
							</Button>
							<Button
								variant="outlined"
								color="primary"
								disabled={ this.props.disabled }
								onClick={ ()=> History.push("/login") }
								href="/login"
								className={ classes.button }>
									Login
							</Button>
						</div>
						</FormControl>
					</CardContent>
				</Card>
			</div>
		);
	}
}


form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(form);
