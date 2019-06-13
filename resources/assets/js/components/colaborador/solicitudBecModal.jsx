import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios'; 

import defaultTheme from '../../theme';
import { PersonIcon, InfoIcon, PersonEditIcon, CloseIcon, CheckIcon, SearchIcon } from '../../icons';

const SolicitudBecaria = ({ classes, open, handleClose }) => {
  const [ifSearchTrue, setIfSearchTrue] = React.useState(null);
  const [mensaje, setMensaje] = React.useState('');
  const [inputMatricula, setInputMatricula] = React.useState('');
  const [inputNomina, setInputNomina] = React.useState('');

  const onChangeMatricula = (event) => {
    setInputMatricula(event.target.value);
  }

  const onChangeNomina = (event) => {
    setInputNomina(event.target.value);
  }
 
  const searchClick = () => {
    axios.post("/create/request", {
      matricula: inputMatricula
    })
    .then(function (response) {
      console.log(response);
      setIfSearchTrue(response.data.status);
      setMensaje(response.data.message);
      console.log(response);
    })
    .catch(function (error) {
      setMensaje(error.data.message);
      setIfSearchTrue(false);
      console.log(error);
    });
  }

  React.useEffect(()=> {
    if(open == false){
      setIfSearchTrue(false);  
    }
  }, [open]); 
  
    
    return (
        <MuiThemeProvider theme={defaultTheme}>
            <Modal
                open={open}
                onClose={handleClose}
                classes={{ root: classes.modalRoot }}
            >
              <div className={`container ${classes.containerWidth}`}>
                  <div className="card px-5 py-3 my-0">
                      <CloseIcon onClick={handleClose} className= {classes.closeIcon}/>
                      <div className="row margin-0">
                          <div className={`col s12 valign-wrapper`}>
                              <PersonEditIcon className={classes.iconEditLabel} />
                              <label className={`${classes.title} blue-tec`}>Solicitud becaria</label>
                          </div>
                          <div className="col s6 mb-2 mt-4 valign-wrapper">
                              <PersonIcon className={classes.iconLabel} />
                              <label>Matrícula</label>
                          </div>
                          <div className="col s6 mb-2 mt-4 valign-wrapper">
                              <InfoIcon className={classes.iconInfo} />
                              <label>Nombre</label>
                          </div>
                          <div className="col s6">
                              <TextField
                                  fullWidth
                                  id="outlined-bare"
                                  classes={{ root: classes.labelText }}
                                  value={inputMatricula}
                                  onChange={onChangeMatricula}
                                  variant="outlined"
                              />
                          </div>
                          <div className="col s6">
                              <TextField
                                  fullWidth
                                  id="outlined-bare"
                                  classes={{ root: classes.labelText }}
                                  value={inputNomina}
                                    onChange={onChangeNomina}
                                  variant="outlined"
                              />
                          </div>
                          <div className="row center-align mb-0">
                            <div className="col s12 mb-2 mt-4">
                                <div className="col s2 offset-s5">
                                    <Button onClick={searchClick} variant="contained" className={`${classes.labelCheckV}`}>
                                        <CheckIcon className={`white-text ${classes.labelSearch}`}/>
                                        <span className={`white-text ${classes.labelLogin}`}>Buscar</span>
                                    </Button>
                                </div>
                            </div>
                          </div>
                          <div className="row center-align mb-0">
                            <div className="col s12 mb-2 mt-4">
                                <div className="col s2 offset-s5">
                                    <Button disabled={true} onClick={searchClick} variant="contained" className={`${classes.labelCheckV}`}>
                                        <CheckIcon className={`white-text ${classes.labelSearch}`}/>
                                        <span className={`white-text ${classes.labelLogin}`}>Aceptar</span>
                                    </Button>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div> 
                  {mensaje != '' ? 
                  <div className={`${ifSearchTrue ? 'green': 'red'} row mb-0  center-align ${classes.wholeRow}`}>
                    <div className="col s12 mb-4 mt-4">
                        <h5 className="white-text center-align my-0">
                        {mensaje}
                        </h5>
                    </div>
                  </div>
                  : ''}
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
        //marginLeft: '0.5rem'
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

    labelCheckV: {
      fontSize: '16px',
      marginRight: '0.5rem',
      backgroundColor: '#223F93',
    },

    labelSearch: {
        fontSize: '20px',
        marginRight: '0.5rem',
    },

    labelCheck: {
        fontSize: '16px',
        marginRight: '0.5rem',
    },

    labelLogin:{
        fontFamily : 'Nunito',
        fontSize: '20px', 
    },

    wholeRow: {
      marginBottom: '0px !important',
      position: 'relative'
    },   

    [`@media (max-width: ${maxWidth}px)`]: {

    }
});

export default withStyles(styles)(SolicitudBecaria);