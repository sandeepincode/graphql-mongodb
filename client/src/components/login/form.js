/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
	form: {
		margin: 40,
	},
  pos: {
    marginBottom: 12,
  },
};

class form extends Component {
	render() {

		const { classes } = this.props;
		const bull = <span className={classes.bullet}>•</span>;

		return (
			<div>
				<Card className={classes.card}>
					<CardContent>
						<Typography className={classes.title} color="textSecondary">
							Welcome!
						</Typography>
						<Typography variant="headline" component="h2">
							Login
						</Typography>
						<FormControl className={classes.form}>
							<InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
							<Input
								id="input-with-icon-adornment"
								startAdornment={
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								}
							/>
							<Input />
						</FormControl>
					</CardContent>
					<CardActions>
						<Button
							size="primary"
							disabled={ this.props.disabled }
							onClick={ this.props.login }
							>Login</Button>
					</CardActions>
				</Card>

        <div>
          <input type='email' onChange={ (e) => { this.props.onChange(e, 'email'); } }/>
        </div>
        <div>
          <input type='password' onChange={ (e) => { this.props.onChange(e, 'password'); } }/>
        </div>

			</div>
		);
	}
}

form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(form);
