import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import axios from 'axios';
import validator from 'validator'; 

const LoginAdmin = ({ classes }) => {
  const [inputName, setInputName] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [isErrorName, setErrorName] = React.useState(false);
  const [isErrorPWD, setErrorPWD] = React.useState(false);

  const onChangeName = (event) => {
    setInputName(event.target.value);
  }

  const onChangePassword = (event) => {
    setInputPassword(event.target.value);
  }

  const onSave = () => {
    setErrorName(validator.isEmpty(inputName));
    setErrorPWD(validator.isEmpty(inputPassword));
  }

  React.useEffect(() => {
    console.log(((!isErrorName && !isErrorPWD)), isErrorName, isErrorPWD);
    if ((!isErrorName && !isErrorPWD)) {
      login();
    }
  }, [isErrorName, isErrorPWD]);

  const login = () => {
    axios.post("/get/login", {
      username: inputName,
      password: inputPassword
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
                    Bienvenido al sistema de Asignación Becaria.
                  </label>
                  <br></br>
                  <label className={classes.labelText}>
                    En esta plataforma encontrarás quién te apoyará como becario este Verano 2019.
                  </label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="col s12 center-align">
                  <TextField
                    classes={{ focused: classes.colorFocused }}
                    fullWidth
                    id="username"
                    label="Usuario:"
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
                <div className="col s12 center-align">
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
              <div className="row no-margin">
                <div className="col s12">
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
    paddingTop:'20vh',
    maxWidth: '30%',
    maxHeight: '100%',
  },

  [`@media (max-width: ${maxWidth}px)`]: {

  }
});

const _LoginAdmin = withStyles(styles)(LoginAdmin);

if (document.getElementById('content')) {
  ReactDOM.render(<_LoginAdmin />, document.getElementById('content'));
}