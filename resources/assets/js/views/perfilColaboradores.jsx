import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import axios from 'axios'; 
import {EmailIcon, PhoneIcon, PersonIcon, InfoIcon, PersonEditIcon, CloseIcon, CheckIcon } from './icons';

const PerfilColaboradores = ({ classes, open, handleClose, colaborador, setColaborador }) => {
  const [inputPhone, setInputPhone] = React.useState(colaborador.celular);
  const [inputOffice, setInputOffice] = React.useState(colaborador.oficina);

  //Reiniciar la variable inputPhone y inputOffice, cuando se abra el modal
  React.useEffect(()=> {
    setInputPhone(colaborador.celular);
    setInputOffice(colaborador.oficina);
  }, [open]);
  
  //Funciones que actualizan los inputs.
  const onChangePhone = (event) => {
    setInputPhone(event.target.value);
  }

  const onChangeOffice = (event) => {
    setInputOffice(event.target.value);
  }

  //Guardar el numero y oficina del Colaborador.
  const saveProfile = () => {
    console.log(inputOffice); 
    axios.post("/colab/save/profile", {
      celular: inputPhone,
      oficina: inputOffice
    })
    .then(function (response) {
      setColaborador(response.data.colaborador);
      alert("Peticion exitosa");
      handleClose();
    })
    .catch(function (error) {
      console.log(error);
      alert("Hubo un error. Intente de nuevo más tarde.");
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
          <div className="card px-5 py-3">
            <CloseIcon onClick={handleClose} className={classes.closeIcon} />
            <div className="row margin-0">
              <div className={`col s12 valign-wrapper`}>
                <PersonEditIcon className={classes.iconEditLabel} />
                <label className={`${classes.title} blue-tec`}>Información personal</label>
              </div>
            </div>
            <div className="row margin-0">
              <div className="col s6 mb-2 mt-4 valign-wrapper">
                <PersonIcon className={classes.iconLabel} />
                <label>Nombre</label>
              </div>
              <div className="col s6 mb-2 mt-4 valign-wrapper">
                <InfoIcon className={classes.iconInfo} />
                <label>Departamento</label>
              </div>
            </div>
            <div className="row margin-0">
              <div className="col s6">
                <TextField
                  fullWidth
                  id="outlined-bare"
                  classes={{ root: classes.labelText }}
                  defaultValue={colaborador.nombre_completo}
                  InputProps={{
                      readOnly: true,
                      disabled: true,
                  }}
                  variant="outlined"
                />
              </div>
              <div className="col s6">
                <TextField
                  fullWidth
                  id="outlined-bare"
                  classes={{ root: classes.labelText }}
                  defaultValue={colaborador.departamento.nombre_departamento}
                  InputProps={{
                      readOnly: true,
                      disabled: true,
                  }}
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row margin-0">
              <div className="col s6 mb-2 mt-4 valign-wrapper">
                <InfoIcon className={classes.iconInfo} />
                <label>Oficina</label>
              </div>
              <div className="col s6 mb-2 mt-4 valign-wrapper">
                <EmailIcon className={classes.iconLabel} />
                <label >Correo Electrónico</label>
              </div>
            </div>
            <div className="row margin-0">
              <div className="col s6">
                <TextField
                  fullWidth
                  id="outlined-bare"
                  classes={{ root: classes.labelText }}
                  variant="outlined"
                  value={inputOffice}
                  onChange={onChangeOffice}
                />
              </div>
              <div className="col s6">
                <TextField
                  fullWidth
                  id="outlined-bare"
                  classes={{ root: classes.labelText }}
                  defaultValue={colaborador.email}
                  InputProps={{
                      readOnly: true,
                      disabled: true,
                  }}
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row margin-0">
              <div className="col s6 mb-2 mt-4 valign-wrapper">
                <PhoneIcon className={classes.iconInfo} />
                <label>Teléfono</label>
              </div>
            </div>
            <div className="row margin-0">
              <div className="col s6">
                <TextField
                  fullWidth
                  id="outlined-bare"
                  classes={{ root: classes.labelText }}
                  variant="outlined"
                  value={inputPhone}
                  onChange={onChangePhone}
                />
              </div>
            </div>
            <div className="row center-align">
              <div className="col s12 mb-2 mt-4">
                <Button
                  onClick={saveProfile}
                  variant="contained"
                  color="primary">
                  <CheckIcon className={`white-text ${classes.labelCheck}`}/>
                  <span className={classes.labelLogin}>Guardar</span>
                </Button>
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

    modalWrapper: {
        padding: "25px !Important"
    },

    modalRoot: {
        top: '20%',
    },

    title: {
        fontSize: '30px',
        fontWeight: 'bold',
    },

    icon: {
        fontSize: '17px',
        marginRight: '0.5rem'
    },

    labelText: {
        fontSize: '14px',
        color: '#000',
    },

    iconLabel: {
        color: "#101010",
        fontSize: '14px',
        marginRight: '0.5rem'
    },
    iconEditLabel: {
        color: "#223f93",
        fontSize: '30px',
        marginRight: '0.5rem'
    },

    iconSchool: {
        color: "#101010",
        fontSize: '18px',
        marginRight: '0.5rem'
    },

    iconInfo: {
        color: "#101010",
        fontSize: '18px',
        marginRight: '0.5rem'
    },

    closeIcon: {
        cursor : 'pointer',
        color: 'black',
        position: 'absolute',
        right: '12px',
        top: '12px',
        fontSize: '18px',
    },

    containerWidth: {
        maxWidth: '50%',
    },

    labelLogin: {
        fontFamily : 'Nunito',
        fontSize: '20px',
        marginRight: '0.5rem',
    },

    labelCheck:{
        fontSize: '16px',
        marginRight: '0.5rem',
    },

    [`@media (max-width: ${maxWidth}px)`]: {

    }
});

export default withStyles(styles)(PerfilColaboradores);
