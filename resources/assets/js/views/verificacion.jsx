import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import validator from 'validator'; 

import defaultTheme from '../theme';

const Verificacion = ({ classes }) => {
  const [inputName, setInputName] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = React.useState('');
  const [isErrorName, setErrorName] = React.useState(false);
  const [isErrorPWD, setErrorPWD] = React.useState(false);
  const [isErrorCPWD, setErrorCPWD] = React.useState(false);
  const [onChange, setChange] = React.useState(false);

  const onChangeName = (event) => {
    setInputName(event.target.value);
  }

  const onChangePassword = (event) => {
    setInputPassword(event.target.value);
  }

  const onChangeConfirmPassword = (event) => {
    setInputConfirmPassword(event.target.value);
  }

  const onSave = () => {
    setErrorName(validator.isEmpty(inputName));
    setErrorPWD(validator.isEmpty(inputPassword));
    setErrorCPWD(validator.isEmpty(inputConfirmPassword) && validator.equals(inputConfirmPassword, inputPassword));
    setChange(true);
  }

  React.useEffect(() => {
    if ((!isErrorName && !isErrorPWD && !isErrorCPWD)) {
      login();
    }
  }, [isErrorName, isErrorPWD, isErrorCPWD, onChange]);

  const login = () => {
    axios.post("/verify/account", {
      username: inputName,
      password: inputPassword,
      v_code: window.location.pathname.split("/").slice(-1).pop()
    })
    .then(function (response) {
      window.location.replace('/');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className={`container ${classes.containerWidth}`}>
        <div className="card">
          <div className={`row margin-0`}>
            <div className={`col s12 ${classes.modalWrapper}`}>
              <div className="row">
                <div className="col s12">
                  <label className={classes.labelHeader}>
                    Verificacion de Cuenta | Sistema de Asignación Becaria.
                  </label>
                  <br></br>
                  <label className={classes.labelText}>
                    Para terminar el proceso de inicio de cuenta, te solicitamos que ingreses una contraseña.
                  </label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="col s10 offset-s1 center-align">
                  <TextField
                    classes={{ focused: classes.colorFocused }}
                    fullWidth
                    id="username"
                    label="Matrícula:"
                    value={inputName}
                    onChange={onChangeName}
                    margin="normal"
                    variant="outlined"
                    error={isErrorName}
                    helperText={isErrorName && 'Usuario incorrecto.'}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s10 offset-s1 center-align">
                  <TextField
                    classes={{ focused: classes.colorFocused }}
                    fullWidth
                    id="password"
                    label="Contraseña:"
                    type="password"
                    value={inputPassword}
                    onChange={onChangePassword}
                    margin="normal"
                    variant="outlined"
                    error={isErrorPWD}
                    helperText={isErrorPWD && 'Este campo es requerido.'}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s10 offset-s1 center-align">
                  <TextField
                    classes={{ focused: classes.colorFocused }}
                    fullWidth
                    id="password"
                    label="Confirmar Contraseña:"
                    type="password"
                    value={inputConfirmPassword}
                    onChange={onChangeConfirmPassword}
                    margin="normal"
                    variant="outlined"
                    error={isErrorCPWD}
                    helperText={isErrorCPWD && 'La confirmación no es igual a la contraseña.'}
                  />
                </div>
              </div>
              <div className="row no-margin">
                <div className="col s10 offset-s1">
                  {/*<Button fullWidth variant="contained" color="primary" href="" onClick={onSave}>*/}
                  <Button fullWidth variant="contained" color="primary" href="" onClick={onSave}>
                      Iniciar Sesión  
                  </Button>
                </div>
              </div>
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
  modalRoot: {
    top: '20%',
  },

  containerWidth: {
    paddingTop:'10vh',
    maxWidth: '40%',
    maxHeight: '100%',
  },

  [`@media (max-width: ${maxWidth}px)`]: {

  }
});

const _Verificacion = withStyles(styles)(Verificacion);

if (document.getElementById('content')) {
  ReactDOM.render(<_Verificacion />, document.getElementById('content'));
}