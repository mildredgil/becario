import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import validator from 'validator';

import defaultTheme from '../../theme';
import { CloseIcon } from '../../icons';

const ModalRegister = ({ classes, open, handleClose, userType }) => {
  const [inputName, setInputName] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = React.useState('');
  const [isErrorName, setErrorName] = React.useState(false);
  const [isErrorPWD, setErrorPWD] = React.useState(false);
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
    let usernameMatch = (!validator.matches(inputName, /^[lL]\d{8}/));
    
    if(userType == 'ESTUDIANTE') {
      usernameMatch = (!validator.matches(inputName, /^[aA]\d{8}/));
    }

    if ((!validator.isLength(inputName, { min: 9, max: 9 })) || usernameMatch )
      setErrorName(true);
    else
      setErrorName(false);
    setErrorPWD(validator.isEmpty(inputPassword));
    setChange(true);
  }

  React.useEffect(() => {
    console.log(((!isErrorName && !isErrorPWD)), isErrorName, isErrorPWD);
    if ((!isErrorName && !isErrorPWD)) {
      login();
    }
  }, [isErrorName, isErrorPWD, onChange]);

  const login = () => {
      axios.post("/register", {
        username: inputName,
        password: inputPassword,
        userType: userType,
      })
      .then(function (response) {
        console.log(response);
        if(response.data.status == "Success") {
          window.location.replace('/');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <Modal
        open={open}
        onClose={handleClose}
        classes={{ root: classes.modalRoot }}
      >
        <div className={`container ${classes.containerWidth}`}>
          <div className="card">
            <div className={`row margin-0`}>
              <div className={`col s12 ${classes.modalWrapper}`}>
                <CloseIcon style={{cursor:'pointer',}} className={classes.closeIcon} onClick={handleClose} />
                <div className="row">
                  <div className="col s12 center-align">
                    <label className={classes.titleHeader}>
                      Registro
                    </label>
                  </div>
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
                <div className="row">
                  <div className="col s12 center-align">
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
                      error={isErrorPWD}
                      helperText={isErrorPWD && 'Este campo es requerido.'}
                    />
                  </div>
                </div>
                <div className="row no-margin">
                  <div className="col s12">
                    <Button fullWidth variant="contained" color="primary" onClick={onSave}>
                      Registrarse
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
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

  titleHeader: {
    fontSize: '24px',
    color: '#000',
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
    maxWidth: '30%',
  },

  [`@media (max-width: ${maxWidth}px)`]: {

  }
});

export default withStyles(styles)(ModalRegister);