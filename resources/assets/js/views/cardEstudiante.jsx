import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Button from '@material-ui/core/Button';
import {SchoolIcon, EmailIcon, LocationIcon, PhoneIcon, PersonIcon, InfoIcon} from './icons';

const CardEstudiante = ({classes}) => {
  
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
            <div className="col s6 valign-wrapper">
              <PersonIcon className={classes.iconLabel}/>
              <label>Nombre</label>
            </div>
            <div className="col s6 valign-wrapper">
              <InfoIcon className={classes.iconInfo}/>
              <label>Matrícula</label>
            </div>
          </div>
          <div className="row margin-0">
            <div className="col s6">
              <label className={classes.labelText}>Jamememes Montemayor</label>
            </div>
            <div className="col s6">
              <label className={classes.labelText}>A01176573</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
            <div className="col s6 valign-wrapper">
              <SchoolIcon className={classes.iconSchool}/>
              <label>Carrera</label>
            </div>
            <div className="col s3 valign-wrapper">
              <InfoIcon className={classes.iconInfo}/>
              <label >Siglas</label>
            </div>
            <div className="col s3 valign-wrapper">
              <InfoIcon className={classes.iconInfo}/>
              <label >Semestre</label>
            </div>
          </div>
          <div className="row margin-0">
            <div className="col s6">
              <label className={classes.labelText}>Ingeniería en Tecnologías Computacionales</label>
            </div>
            <div className="col s3">
              <label className={classes.labelText}>ITC</label>
            </div>
            <div className="col s3">
              <label className={classes.labelText}>6°</label>
            </div>
          </div>
          <div className={`row margin-0 ${classes.paddingTop20}`}>
          <div className="col s6 valign-wrapper">
              <EmailIcon className={classes.iconLabel}/>
              <label>Correo</label>
            </div>
            <div className="col s6 valign-wrapper">
              <PhoneIcon className={classes.iconLabel}/>
              <label>Teléfono</label>
            </div>
          </div>
          <div className="row margin-0">
          <div className="col s6">
              <label className={classes.labelText}>jamememes.mm@tug.com.mx</label>
            </div>
            <div className="col s6">
              <label className={classes.labelText}>52818181818</label>
            </div>
          </div>
        </div>
        <div className="row margin-0 blue-tec-light-b valign-wrapper px-3">
          <div className="col s4 py-3">
              <label className={`blue-tec-dark`}>Evaluación: </label>
              <br/>
              <label className={`${classes.status} blue-tec`}> Satisfactorio</label>
          </div>
          <div className="col s8 right-align py-3">
            <Button variant="contained"  color="primary" href="mailto:A00820397@itesm.mx">
              <EmailIcon className={`white-text ${classes.icon}`} />
              Enviar Correo
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

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(CardEstudiante);