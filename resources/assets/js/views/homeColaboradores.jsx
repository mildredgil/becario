import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';

const Login = ({classes}) => {
  const [inputName, setInputName] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');

  const onChangeName = (event) => {
    setInputName(event.target.value);
  }

  const onChangePassword = (event) => {
    setInputPassword(event.target.value);
  }
  
  return (
    <MuiThemeProvider theme={defaultTheme}>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = theme => ({

  modalWrapper: {
    padding: "25px !Important"
  },

  labelHeader: {
    fontSize: '18px',
    color: '#000',
    textAlign: 'center',
  },

  labelText: {
    fontSize: '14px',
    color: '#000',
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

const _Login = withStyles(styles)(Login);

if (document.getElementById('login-modal')) {
  ReactDOM.render(<_Login/>, document.getElementById('login-modal'));
}