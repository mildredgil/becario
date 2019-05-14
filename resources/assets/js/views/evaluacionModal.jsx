import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import {PersonIcon, PersonEditIcon, CloseIcon, CheckIcon } from './icons';
import axios from 'axios'; 

const EvaluacionAlumno = (props) => {
  const {classes, asignacion, index, evaluaciones, setEvaluaciones} = props;
  const [evaluacion, setEvaluacion] = React.useState(asignacion.evaluacion);
  const [evaluacionString, setEvaluacionString] = React.useState('---------'); 
  
  const isSatisfactorio = () => {
    setEvaluacion(1);
    let evaluacionEstudainte = evaluaciones;
    evaluacionEstudainte[index] = {id: asignacion.id, evaluacion: 1};
    setEvaluaciones(evaluacionesEstudiante);
  }

  const isInsatisfactorio = () => {
    setEvaluacion(2);
    let evaluacionEstudainte = evaluaciones;
    evaluacionEstudainte[index] = {id: asignacion.id, evaluacion: 2};
    setEvaluaciones(evaluacionesEstudiante);
  }

  React.useEffect(()=> {
    if(evaluacion == 1) {
      setEvaluacionString('Satisfactorio');
    } else if(evaluacion == 2) {
      setEvaluacionString('Insatisfactorio');
    } else {  
      setEvaluacionString('---------');
    } 
  },[evaluacion]);

  return (
    <React.Fragment>
      <div className="row margin-0">
        <div className="col s6 mt-4" >
          <PersonIcon className={classes.iconLabel} />
          <label className={classes.labelText}>{asignacion.estudiante.nombre_completo}</label>
        </div>
        <div className="col s2 mt-4 valign-wrapper">
          <Button onClick={isSatisfactorio} size="small" className={`center-align ${classes.botonVerde}`}>
             <CheckIcon className={classes.iconLabel} />
          </Button>
        </div>
        <div className="col s2 mt-4 valign-wrapper">
          <Button onClick={isInsatisfactorio} size="small" className={`center-align ${classes.botonRojo}`}>
            <CloseIcon className={`white-text ${classes.iconLabel}`} />
          </Button>
        </div>
        <div className="col s2 mt-4 valign-wrapper">
          <label className={`${classes.selectedEv} blue-tec`}>{evaluacionString}</label>
        </div>
      </div>
      <div className="row margin-0">
        <div className="col s16 mb-2 mt-1 valign-wrapper">
          <label>{asignacion.estudiante.matricula}</label>
        </div>
      </div>
    </React.Fragment>
  );
}

const EvaluacionModal = ({ asignaciones, classes, open, handleClose }) => {
    const [evaluaciones, setEvaluaciones] = React.useState([]);
    React.useEffect(()=> {
      if(asignaciones != null) {
        let _evaluacion = evaluaciones;

        asignaciones.map((asignacion, index) => {
          let evaluacionEstudiante = {
            id: asignacion.id,
            evaluacion : asignacion.evaluacion
          };
          _evaluacion.push(evaluacionEstudiante);
        });
        setEvaluaciones(_evaluacion);
      }
    },[asignaciones]);
    console.log(evaluaciones);

    const onSave = () => {
      axios.post("/save/evaluations", {
        evaluaciones : evaluaciones
      })
      .then(function (response) {
        alert("Evaluacion correctamente enviada");
        window.location.replace('/');
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
                  <div className={`card px-5 py-3 mb-0 mt-0`}>
                      <CloseIcon onClick={handleClose} className= {classes.closeIcon}/>
                      <div className="row">
                        <div className={`col s12 valign-wrapper`}>
                            <PersonEditIcon className={classes.iconEditLabel} />
                            <label className={`${classes.title} blue-tec`}>Becarios</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className={`col s12`}>
                          <label className={`center-align ${classes.labelText}`}>
                            Para cada uno de tus becarios evalua como SATISFACTORIO o INSATISFACTORIO,
                            con respecto a su desempeño durante este periodo.
                          </label>
                        </div>
                      </div>
                      <div className="row margin-0">
                        <div className={`col s2 offset-s6 valing-wrapper`}>
                            <label className={`center-align ${classes.labelText}`}>Satisfactorio</label>
                        </div>
                        <div className={`col s2 valing-wrapper`}>
                            <label className={`center-align ${classes.labelText}`}>Insatisfactorio</label>
                        </div>
                      </div>
                      {
                        asignaciones.map((asignacion, index) => {
                          
                          return (
                            <EvaluacionAlumno classes={classes} index={index} evaluaciones={evaluaciones} setEvaluaciones={setEvaluaciones} asignacion={asignacion}/>
                          )
                        })
                      }
                      <div className="row center-align">
                        <div className="col s12 mb-2 mt-4">
                          <Button
                            onClick={onSave}
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
        top: '10%',
    },

    title: {
        fontSize: '30px',
        fontWeight: 'bold',
    },

    botonVerde:{
        backgroundColor: '#aff575',
    },

    botonRojo:{
        backgroundColor: '#ff6d6d',
    },

    icon: {
        fontSize: '17px',
        marginRight: '0.5rem'
    },

    labelText: {
        fontSize: '16px',
        color: '#000',
        //marginLeft: '0.5rem'
    },

    iconLabel: {
        color: "#101010",
        fontSize: '15px',
        //marginRight: '0.5rem'
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
        maxHeight: '90%',
        overflowY: 'scroll'
    },

    labelCheck: {
        fontSize: '16px',
        marginRight: '0.5rem',
    },

    labelLogin:{
        fontFamily : 'Nunito',
        fontSize: '20px', 
    },

    selectedEv: {
      fontFamily : 'Nunito',
      fontSize: '16px', 
      fontWeight: 'bold'
    },

    [`@media (max-width: ${maxWidth}px)`]: {

    }
});

export default withStyles(styles)(EvaluacionModal);
