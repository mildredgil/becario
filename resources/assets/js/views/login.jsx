import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import {CloseIcon} from './icons';
import axios from 'axios';

const Login = ({classes}) => {
  const [inputName, setInputName] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');

  const onChangeName = (event) => {
    setInputName(event.target.value);
  }

  const onChangePassword = (event) => {
    setInputPassword(event.target.value);
  }

  const login = () => {
    console.log("hi");
		/*axios({
			method: 'post',
      url:  "/get/login",    
      data: JSON.stringify({
        username: inputName,
        password: inputPassword
      })
		}).then((response) => {
      console.log(response);
		}).catch((err) =>  {
			//console.log(err);
    });*/
    axios.post("/get/login", {
      username: inputName,
      password: inputPassword
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="row">
        <div className={`modal col s12 m4 offset-m4 ${classes.modalWrapper}`}>
        <CloseIcon className= {classes.closeIcon}/>
          <div className="row">
            <div className="col s12">
              <label className={classes.labelHeader}>
                Bienvenido al sistema de Asignación Becaria.
              </label>
              <br></br>
              <label className={classes.labelText}>
                En esta plataforma encontrarás con quién realizarás tu servicio becario este Verano 2019.
              </label>
            </div>
          </div>
          <div className="row no-margin">
            <div className="col s12 center-align">
              <TextField
                classes={{focused:classes.colorFocused}}
                fullWidth
                id="username"
                label="Matricula de Alumno:" 
                value={inputName}
                onChange={onChangeName}
                margin="normal"
                variant="outlined"
                name="username"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <TextField
                classes={{focused:classes.colorFocused}}
                fullWidth
                id="password"
                label="Contraseña:"
                type="password" 
                value={inputPassword}
                onChange={onChangePassword}
                margin="normal"
                variant="outlined"
                name="password"
              />
            </div>
          </div>
          <div className="row no-margin">
            <div className="col s12">
              <Button onClick={login} fullWidth variant="contained"  color="primary">
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = theme => ({
  colorFocused: {
    borderColor: '#223f93'
  },

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
  closeIcon: {
    color: 'black',
    position: 'absolute',
    right: '10px',
    top: '12px',
    fontSize: '18px',
  },


  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

const _Login = withStyles(styles)(Login);

if (document.getElementById('login-modal')) {
  ReactDOM.render(<_Login/>, document.getElementById('login-modal'));
}