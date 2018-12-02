import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
    input: {
        color: 'white',
        'font-size': '1em',
        'borderBottomColor': 'white',
        'margin': '20px',
    },
  button: {
    display: 'flex',
    'flex-direction': 'column',
    'font-size': '0.75em',
    margin: '24px',
  },
});

class Inputs extends React.Component {
    state = {
        email: '',
        repoOwner: '',
        repoName: '',
      };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log('Form Submitted with value: ', this.state);
    event.preventDefault();
    axios.put('http://localhost:8080/create-subscription', this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
      const { classes } = this.props;
      return (
        <div className={classes.container}>
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                  <Grid container className={classes.demo} justify="center" spacing={16}>
                      <Input
                        className={classes.input}
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleChange('email')}
                        inputProps={{
                          'aria-label': 'Description',
                        }}
                      />
                      <Input
                        className={classes.input}
                        value={this.state.repoOwner}
                        placeholder="Repository Owner"
                        onChange={this.handleChange('repoOwner')}
                        inputProps={{
                          'aria-label': 'Description',
                        }}
                      />
                      <Input
                        className={classes.input}
                        value={this.state.repoName}
                        placeholder="Repository Name"
                        onChange={this.handleChange('repoName')}
                        inputProps={{
                          'aria-label': 'Description',
                        }}
                      />
                  </Grid>
                  <Grid container className={classes.demo} justify="center" spacing={16}>
                      <Button variant="contained" className={classes.button} onClick={this.handleSubmit} type="submit">Subscribe!</Button>
                  </Grid>
                </Grid>
            </Grid>
        </div>
      );
  }
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Inputs);
