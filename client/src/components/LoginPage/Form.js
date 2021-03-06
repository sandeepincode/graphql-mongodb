/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import History from '../../history.js';

const styles = {
  card: {
    width: 400,
    margin: '0 auto',
  },
  cardContent: {
    margin: '0 auto',
    textAlign: 'center'
  },
  title: {
    width: 200,
    margin: '0 auto',
    marginBottom: 16,
    fontSize: 14,
  },
  textField: {
    margin: '0 auto',
    width: '100%',
  },
  form: {
    textAlign: 'center',
    padding: 40,
    width: '70%',
  },
  button: {
    margin: 10,
    width: 100,
  },
  buttons: {
    margin: '10px 0 0',
  }
};

class Form extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <FormControl className={classes.form}>
              <div className={classes.title}>
                <Typography variant="headline" component="h1">
                  Login
                </Typography>
              </div>
              <div>
                <TextField
                  id="email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  onChange={(e) => {
                    this.props.onChange(e, 'email');
                  }}
                  autoComplete="current-password"
                  margin="normal"
                />
              </div>
              <div>
                <TextField
                  id="password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  onChange={(e) => {
                    this.props.onChange(e, 'password');
                  }}
                  autoComplete="current-password"
                  margin="normal"
                />
              </div>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={this.props.disabled}
                  onClick={this.props.login}
                  className={classes.button}>
                  Login
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="/register"
                  disabled={this.props.disabled}
                  onClick={() => History.push('/register')}
                  className={classes.button}>
                  Register
                </Button>
              </div>
            </FormControl>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
