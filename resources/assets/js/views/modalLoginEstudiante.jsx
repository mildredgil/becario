import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import { CloseIcon } from './icons';

const ModalLoginColaborador = ({ classes, open, handleClose }) => {
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
                    />
                  </div>
                </div>
                <div className="row no-margin">
                  <div className="col s12">
                    <Button fullWidth variant="contained" color="primary" href="/homeEstudiante">
                      Iniciar Sesión
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

export default withStyles(styles)(ModalLoginColaborador);