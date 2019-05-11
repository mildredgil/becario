import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';

const CardColaborador = ({classes}) => {
  
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="card px-3 py-3 my-0">
        <div className="row margin-0">
          <div className="col s8">
            <label className={classes.title}>Colaborador</label>
          </div>
          <div className="col s4 right-align">
            <label>Evaluación de Perido: </label><label> Pendiente</label>
          </div>
        </div>
        <div className={`row margin-0 ${classes.paddingTop20}`}>
          <div className="col s6">
            <label>Nombre</label>
          </div>
          <div className="col s6">
            <label>Departamento</label>
          </div>
        </div>
        <div className="row margin-0">
          <div className="col s6">
            <label className={classes.labelText}>Lorena Gomez</label>
          </div>
          <div className="col s6">
            <label className={classes.labelText}>Ciencias Computacionales</label>
          </div>
        </div>
        <div className={`row margin-0 ${classes.paddingTop20}`}>
          <div className="col s6">
            <label>Oficina</label>
          </div>
          <div className="col s6">
            <label >Correo Electrónico</label>
          </div>
        </div>
        <div className="row margin-0">
          <div className="col s6">
            <label className={classes.labelText}>Cetec torre sur 301</label>
          </div>
          <div className="col s6">
            <label className={classes.labelText}>lorena.gomez@tec.mx</label>
          </div>
        </div>
        <div className={`row margin-0 ${classes.paddingTop20}`}>
          <div className="col s6">
            <label>Teléfono</label>
          </div>
        </div>
        <div className="row margin-0">
          <div className="col s6">
            <label className={classes.labelText}>52818181818</label>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = theme => ({
  title: {
    fontSize: '30px',
    color: '#1568ff',
    fontWeight: 'bold'
  },  
  
  labelText:{
    fontSize: '20px',
    color: '#000',
  },

  paddingTop20: {
    paddingTop: '20px'
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(CardColaborador);