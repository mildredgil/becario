import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';

const ReglamentoModal = ({classes}) => {
  const [open, setOpen]  = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <MuiThemeProvider theme={defaultTheme}>
			<Button onClick={handleOpen}>Open Modal</Button>
			<Modal
				open={open}
        onClose={handleClose}
        classes={{ root: classes.modalRoot }}
			>
				<div className={`container ${classes.containerWidth}`}>
					<div className="card px-2 py-2">
            <div className="row">
              <div className="col s12 center-align">
                <label className={classes.title}>
                  Reglamento Servicio Becario
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
                <Button variant="contained" href="#contained-buttons" className={classes.button}>
                 Descarga PDF
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <label className={classes.subTitle}>
                  Antes de empezar:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <ul className={classes.list}>
                  <li className={classes.list}>Conocer el Reglamento y las sanciones aplicadas en caso de no seguirlo</li>
                  <li className={classes.list}>Revisar periódicamente el correo institucional</li>
                  <li className={classes.list}>Revisar la asignación o reasiignación y reportarse con la persona indicada</li>
                  <li className={classes.list}>Intercambiar datos y negociar horarios de trabajo</li>
                  <li className={classes.list}>Cumplir con la asignación durante todo el semestre</li>
                  <li className={classes.list}>Solicitar ser evaluado y enviar la evaluación a Dirección de Becas en fecha</li>
                  <li className={classes.list}>Verificar que el reporte y el desempeño real coincidan</li>
                  <li className={classes.list}>Reportar a la Dirección de Becas y Apoyo</li>
                  <li className={classes.list}>Actualizar la información para que el solicitante pueda contactarte</li>
                </ul> 
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
  title:{
    fontSize: '25px',
    color: '#000',
  },

  title:{
    fontSize: '25px',
    color: '#000',
  },

  list:{
    paddingLeft: '40px !important',
    listStyleType: 'initial !important',
  },

  subTitle:{
    fontSize: '15px',
    color: '#000',
  },

  modalWrapper: {
    padding: "25px !Important"
  },

  modalRoot: {
    top: '20%',
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
	containerWidth: {
    maxWidth: 450,
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(ReglamentoModal);