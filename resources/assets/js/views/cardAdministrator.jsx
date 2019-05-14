import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Button from '@material-ui/core/Button';
import {SchoolIcon, EmailIcon, LocationIcon, InfoIcon, PersonIcon, SupervisorIcon} from './icons';
import { CloseIcon, CheckIcon} from './icons';

const CardAdministrator = ({classes, asignacion}) => {
  let evaluacion = ['Pendiente', 'Satisfactorio', 'Insatisfactorio'];
  const semestre = ['','Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Septimo', 'Octavo', 'Noveno'];
  
  if(asignacion == false) {
    return null;
  }

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="card my-0">
        <div className="px-3 py-3">  
          <div className="row margin-0">
            <div className="col s12">
              <label className={classes.title}>Solicitud de asignación</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
            <div className="col s6 valign-wrapper">
              <PersonIcon className={classes.iconLabel}/>
              <label>Estudiante</label>
            </div>
            <div className="col s6 valign-wrapper">
              <PersonIcon className={classes.iconLabel}/>
              <label>Colaborador</label>
            </div> 
          </div>
          <div className="row margin-0">
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.estudiante.nombre_completo}</label>
            </div>
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.colaborador.nombre_completo}</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
            <div className="col s3 valign-wrapper">
              <InfoIcon className={classes.iconSchool}/>
              <label >Matrícula</label>
            </div>
            <div className="col s3 valign-wrapper">
              <InfoIcon className={classes.iconSchool}/>
              <label>Semestre</label>
            </div>
            <div className="col s3 valign-wrapper">
              <InfoIcon className={classes.iconSchool}/>
              <label >Nómina</label>
            </div>
            <div className="col s3 valign-wrapper">
              <SupervisorIcon className={classes.iconSchool}/>
              <label >Carga</label>
            </div>
          </div>
          <div className="row margin-0">
            <div className="col s3">
              <label className={classes.labelText}>{asignacion.estudiante.matricula}</label>
            </div>
            <div className="col s3">
              <label className={classes.labelText}>{semestre[asignacion.estudiante.semestre_actual]}</label>
            </div>
            <div className="col s3">
              <label className={classes.labelText}>{asignacion.colaborador.nomina}</label>
            </div>
            <div className="col s3">
              <label className={classes.labelText}>{asignacion.colaborador.carga}</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
            <div className="col s6 valign-wrapper">
              <SchoolIcon className={classes.iconSchool}/>
              <label >Carrera</label>
            </div>
            <div className="col s6 valign-wrapper">
              <SchoolIcon className={classes.iconSchool}/>
              <label>Departamento</label>
            </div>
          </div>
          <div className="row margin-0">
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.estudiante.carrera.siglas_carrera}</label>
            </div>
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.colaborador.departamento.nombre_departamento}</label>
            </div>
          </div>
          <div className= "row mt-5">
          <div className="col s6 center-align">
                <Button  variant="contained" className={`${classes.labelCheckV}`}>
                    <CheckIcon className={`white-text ${classes.labelSearch}`}/>
                    <span className={` white-text ${classes.labelLogin}`}>Aceptar</span>
                </Button>
          </div>
          <div className="col s6 center-align">
                <Button  variant="contained" className={`${classes.labelCheckR}`}>
                    <CloseIcon className={`white-text ${classes.labelSearch}`}/>
                    <span className={` white-text ${classes.labelLogin}`}>Denegar</span>
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

  labelLogin: {
    fontFamily : 'Nunito',
  },

  labelCheckR:{
    fontSize: '16px',
    marginRight: '0.5rem',
    backgroundColor: '#FF0000',
  },

  labelCheckV:{
    fontSize: '16px',
    marginRight: '0.5rem',
    backgroundColor: '#088A08',
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(CardAdministrator);