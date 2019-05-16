import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import axios from 'axios'; 
import { PersonIcon, InfoIcon, PersonEditIcon, CloseIcon, CheckIcon } from './icons';
import validator from 'validator';

const CrearAsignModal = ({ classes, open, handleClose }) => {
    const [ifSearchTrue, setIfSearchTrue] = React.useState(null);
    const [mensaje, setMensaje] = React.useState('');
    const [inputMatricula, setInputMatricula] = React.useState('');
		const [inputNomina, setInputNomina] = React.useState('');
		const [isErrorName, setErrorName] = React.useState(false);
		const [isErrorNom, setErrorNom] = React.useState(false);
		const [onChangeState, setChangeState] = React.useState(false);


    //console.log(ifSearchTrue);
    const onChangeMatricula = (event) => {
      setInputMatricula(event.target.value);
    }

    const onChangeNomina = (event) => {
      setInputNomina(event.target.value);
		}
		
		/*const create = () => {
			axios.post("/create/assignments", {
        matricula: inputMatricula,
        nomina: inputNomina
      })
      .then(function (response) {
        console.log('response', response);
        setIfSearchTrue(response.data.status);
        setMensaje(response.data.message);
        console.log(response);
        //window.location.replace('/');
      })
      .catch(function (error) {
        setMensaje(error.data.message);
        setIfSearchTrue(false);
        console.log('error', error);
      });
    }*/
    
    const searchClickA = () => {
			if ((!validator.isLength(inputMatricula, { min: 9, max: 9 })) || (!validator.matches(inputMatricula, /^[aA]\d{8}/)))
				setErrorName(true);
			else{
				setErrorName(false);
			}

			if ((!validator.isLength(inputNomina, { min: 9, max: 9 })) || (!validator.matches(inputNomina, /^[lL]\d{8}/)))
				setErrorNom(true);
			else{
				setErrorNom(false);
			}
			setChangeState(true);
    }
    
    const close = () => {
      handleClose();
      setMensaje('');
      setInputMatricula('');
      setInputNomina('');
    }
		
		React.useEffect(() => {
      console.log((!isErrorName && !isErrorNom), isErrorName, isErrorNom, onChangeState);
      if(onChangeState) {
        if ((!isErrorName && !isErrorNom)) {
          createM();
        }
      }
    }, [isErrorName, isErrorNom, onChangeState]);
    
    const createM = () => {
			axios.post("/create/assignments", {
        matricula: inputMatricula,
        nomina: inputNomina
      })
      .then(function (response) {
        console.log('response', response);
        setIfSearchTrue(response.data.status);
        setMensaje(response.data.message);
        console.log(response);
        //window.location.replace('/');
      })
      .catch(function (error) {
        setMensaje(error.data.message);
        setIfSearchTrue(false);
        console.log('error', error);
      });
    }

    React.useEffect(()=> {
      if(open == false){
        setIfSearchTrue(false);
        close();
      }
    }, [open]); 
    
    return (
        <MuiThemeProvider theme={defaultTheme}>
            <Modal
                open={open}
                onClose={close}
                classes={{ root: classes.modalRoot }}
            >
                <div className={`container ${classes.containerWidth}`}>
                    <div className="card px-5 py-3 my-0">
                      <CloseIcon onClick={close} className= {classes.closeIcon}/>
                      <div className="row margin-0">
                        <div className={`col s12 center-align valign-wrapper`}>
                            <PersonEditIcon className={classes.iconEditLabel} />
                            <label className={`${classes.title} blue-tec`}>Crear Asignación</label>
                        </div>
                        <div className="col s6 mb-2 mt-4 valign-wrapper">
                            <PersonIcon className={classes.iconLabel} />
                            <label>Matricula Alumno</label>
                        </div>
                        <div className="col s6 mb-2 mt-4 valign-wrapper">
                            <InfoIcon className={classes.iconInfo} />
                            <label>Nómina Colaborador</label>
                        </div>
                        <div className="col s6">
                          <TextField
                              fullWidth
                              id="outlined-bare"
                              classes={{ root: classes.labelText }}
                              value={inputMatricula}
                              onChange={onChangeMatricula}
                              variant="outlined"
                              error={isErrorName}
                              helperText={isErrorName && 'Matrícula incorrecta.'}
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
															error={isErrorNom}
                     					helperText={isErrorNom && 'Este campo es requerido.'}
                          />
                        </div>
                        <div className="row center-align mb-0">
                            <div className="col s12 mb-2 mt-4">
                                <div className="col s2 offset-s5">
                                    <Button variant="contained" className={`${classes.labelCheckV}`} href="" onClick={searchClickA}>
                                        <CheckIcon className={`white-text ${classes.labelSearch}`}/>
                                        <span className={`white-text ${classes.labelLogin}`}>Crear</span>
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

    labelSearch: {
        fontSize: '20px',
        marginRight: '0.5rem',
    },

    labelCheckV: {
        fontSize: '16px',
        marginRight: '0.5rem',
        backgroundColor: '#223F93',
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

export default withStyles(styles)(CrearAsignModal);