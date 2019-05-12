import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Button from '@material-ui/core/Button';
import {SchoolIcon, EmailIcon, LocationIcon, PhoneIcon, PersonIcon} from './icons';

const CardColaborador = ({classes, asignacion}) => {
  let evaluacion = ['Pendiente', 'Satisfactorio', 'Insatisfactorio'];

  if(asignacion == false) {
    return null;
  }

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="card my-0">
        <div className="px-3 py-3">  
          <div className="row margin-0">
            <div className="col s12">
              <label className={classes.title}>Información Colaborador</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
            <div className="col s6 valign-wrapper">
              <PersonIcon className={classes.iconLabel}/>
              <label>Nombre</label>
            </div>
            <div className="col s6 valign-wrapper">
              <SchoolIcon className={classes.iconSchool}/>
              <label>Departamento</label>
            </div>
          </div>
          <div className="row margin-0">
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.colaborador.nombre_completo}</label>
            </div>
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.colaborador.departamento.nombre_departamento}</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
            <div className="col s6 valign-wrapper">
              <LocationIcon className={classes.iconLabel}/>
              <label>Oficina</label>
            </div>
            <div className="col s6 valign-wrapper">
              <EmailIcon className={classes.iconLabel}/>
              <label >Correo Electrónico</label>
            </div>
          </div>
          <div className="row margin-0">
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.colaborador.oficina}</label>
            </div>
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.colaborador.email}</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
            <div className="col s6 valign-wrapper">
              <PhoneIcon className={classes.iconLabel}/>
              <label>Teléfono</label>
            </div>
          </div>
          <div className="row margin-0">
            <div className="col s6">
              <label className={classes.labelText}>{asignacion.colaborador.celular}</label>
            </div>
          </div>
        </div>
        <div className="row margin-0 blue-tec-light-b valign-wrapper px-3">
          <div className="col s4 py-3">
              <label className={`blue-tec-dark`}>Evaluación: </label>
              <br/>
              <label className={`${classes.status} blue-tec`}>{evaluacion[asignacion.evaluacion]}</label>
          </div>
          <div className="col s8 right-align py-3">
            <Button variant="contained"  color="primary" href={"mailto:" + asignacion.colaborador.email}>
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

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(CardColaborador);