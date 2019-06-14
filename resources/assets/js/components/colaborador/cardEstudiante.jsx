import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import defaultTheme from '../../theme';
import {SchoolIcon, EmailIcon, PhoneIcon, PersonIcon, InfoIcon, CloseIcon, CheckIcon} from '../../icons';

const CardEstudiante = ({classes, asignacion}) => {
  const evaluacion = ['Pendiente', 'Satisfactoria', 'Insatisfactoria'];
  const semestre = ['','Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Septimo', 'Octavo', 'Noveno'];
  
  if(asignacion == false) {
    return null;
  } else {
    console.log(asignacion);
  }

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="card my-0">
        <div className="px-3 py-3">  
          <div className="row margin-0">
            <div className="col s12">
              <label className={classes.title}>Información Estudiante</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
          <div className="col s3 valign-wrapper">
              <InfoIcon className={classes.iconInfo}/>
              <label>Matrícula</label>
            </div>
            <div className="col s9 valign-wrapper">
              <PersonIcon className={classes.iconLabel}/>
              <label>Nombre</label>
            </div>
          </div>
          <div className="row margin-0">
          <div className="col s3">
              <label className={classes.labelText}>{asignacion.estudiante.matricula}</label>
            </div>
            <div className="col s9">
              <label className={classes.labelText}>{asignacion.estudiante.nombre_completo}</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
          <div className="col s3 valign-wrapper">
              <PhoneIcon className={classes.iconLabel}/>
              <label>Teléfono</label>
            </div>
          <div className="col s9 valign-wrapper">
              <EmailIcon className={classes.iconLabel}/>
              <label>Correo</label>
            </div>
          </div>
          <div className="row margin-0">
          <div className="col s3">
              <label className={classes.labelText}>{asignacion.estudiante.celular}</label>
            </div>
          <div className="col s9">
              <label className={classes.labelText}>{asignacion.estudiante.email}</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
          <div className="col s3 valign-wrapper">
              <InfoIcon className={classes.iconInfo}/>
              <label >Semestre</label>
           </div>
          <div className="col s9 valign-wrapper">
              <SchoolIcon className={classes.iconSchool}/>
              <label>Carrera</label>
            </div>
          </div>
          <div className="row margin-0">
          <div className="col s3">
              <label className={classes.labelText}>{semestre[asignacion.estudiante.semestre_actual]}</label>
            </div>
            <div className="col s9">
              <label className={classes.labelText}>{asignacion.estudiante.carrera.carrera_nombre}</label>
            </div>
          </div>
        </div>
        <div className="row margin-0 valign-wrapper px-3"> 
          <div className="col s6 center-align py-3">
            <Button variant="contained"  color="primary" className="green">
              <CheckIcon className={`white-text ${classes.iconLabel}`} />
              <span className={classes.labelLogin}>Aceptar</span>
            </Button>
          </div>
          <div className="col s6 center-align py-3">
            <Button variant="contained"  color="primary" className="red">
              <CloseIcon className={`white-text ${classes.iconLabel}`} />
              <span className={classes.labelLogin}>Rechazar</span>
            </Button>
          </div>
        </div>
        <div className="row margin-0 blue-tec-light-b valign-wrapper px-3">
          <div className="col s4 py-3">
              <label className={`blue-tec-dark`}>Evaluación: </label>
              <br/>
              <label className={`${classes.status} blue-tec`}> {evaluacion[asignacion.evaluacion]}</label>
          </div>
          <div className="col s8 right-align py-3">
            <Button variant="contained"  color="primary" href={"mailto:" + asignacion.estudiante.email}>
              <EmailIcon className={`white-text ${classes.icon}`} />
              <span className={classes.labelLogin}>Enviar correo</span>
            </Button>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = theme => ({
  btn: {
    backgroundColor: 'white',
    color: "#212121"
  },

  icon:  {
    fontSize: '17px',
    marginRight: '0.5rem'
  },

  iconLabel: {
    color:"#101010",
    fontSize: '14px',
    marginRight: '0.5rem'
  }, 

  iconSchool: {
    color:"#101010",
    fontSize: '18px',
    marginRight: '0.5rem'
  }, 
  
  iconInfo: {
    color:"#101010",
    fontSize: '18px',
    marginRight: '0.5rem'
  }, 

  title: {
    fontSize: '30px',
    color: '#101010',
    fontWeight: 'bold'
  },  
  
  labelText:{
    fontSize: '20px',
    color: '#000',
  },

  paddingTop20: {
    paddingTop: '20px'
  },

  status: {
    fontSize: '20px'
  },

  containerWidth: {
		maxWidth: '40%',
  },
  
  labelLogin: {
    fontFamily : 'Nunito',
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(CardEstudiante);