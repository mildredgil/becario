import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { DatePicker } from "@material-ui/pickers";
import esLocale from 'date-fns/locale/es';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'; 

import { CheckIcon } from '../../icons';

const PeriodTime = ({ classes }) => {
  const [state, setState] = React.useState({
    inicioAsignaciones: new Date(),
    finAsignaciones: new Date(),
    inicioEvaluaciones: new Date(),
    finEvaluaciones: new Date(),
    year: '2019',
    periodo: 1
  });
  
  const periodos = ['Invierno', 'Febrero-Junio', 'Verano', 'Agosto-Diciembre'];
  let periodoOptions = [];

  periodoOptions.push(<MenuItem value={0}>{periodos[0]}</MenuItem>);
  periodoOptions.push(<MenuItem value={1}>{periodos[1]}</MenuItem>);
  periodoOptions.push(<MenuItem value={2}>{periodos[2]}</MenuItem>);
  periodoOptions.push(<MenuItem value={3}>{periodos[3]}</MenuItem>);
  
  React.useEffect(() => {
    getPeriod();
  }, []);

  const storePeriod = () => {
	  axios.post("/new/period", {
      inicioAsignaciones: state.inicioAsignaciones,
      finAsignaciones: state.finAsignaciones,
      inicioEvaluaciones: state.inicioEvaluaciones,
      finEvaluaciones: state.finEvaluaciones,
      year: state.year,
      periodo: state.periodo
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const getPeriod = () => {
	  axios.post("/period", { 
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const onChangeYear = (event) => {
    setState({
      ...state,
      year: event.target.value
    })
  }

  const onChangePeriod = (event) => {
    setState({
      ...state,
      periodo: event.target.value
    })
  }

  const onChangeDate =( currentDate, date )=> {
    let newState = state;
    console.log(currentDate, date);
    console.log(newState.inicioAsignaciones);
    switch(date) {
      case 'inicioAsignaciones':
        setState({
          ...newState,
          inicioAsignaciones : currentDate
        });
      break;
      case 'finAsignaciones':
        //let finAsignaciones = currentDate;
        setState({
          ...newState,
          finAsignaciones : currentDate
        });
      break;
      case 'inicioEvaluaciones':
        //let inicioEvaluaciones = currentDate;
        setState({
          ...newState,
          inicioEvaluaciones : currentDate
        });
      break;
      case 'finEvaluaciones':
        //let finEvaluaciones = currentDate;
        setState({
          ...newState,
          finEvaluaciones : currentDate
        });
      break;
    }
  }

  return (
    <div className={classes.wrapper}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <div className={`row valign-wrapper my-3`}>
          <div className="col s12 left-align">
              <span className={classes.labelLogin}>Periodo Actual</span>
          </div>
        </div>   
        <div className={`row valign-wrapper my-3`}>
          <div className="col s4 mx-0">
            <TextField
              name='year'
              type='number'
              value={state.year}
              onChange={onChangeYear}
            />
          </div>
          <div className="col s3 offset-s1">
            <StyledSelect
              value={state.periodo}
              onChange={onChangePeriod}
              input={
                <OutlinedInput
                  name="periodo"
                  id="periodo"
                  labelWidth={48}
                />
              }
            >
              {periodoOptions}
            </StyledSelect> 
          </div>
        </div>
        <div className={`row valign-wrapper my-3`}>
          <div className="col s12 left-align">
              <span className={classes.labelLogin}>Periodo de Solicitud de Asignaciones | Aceptación y Rechazo de Becarios</span>
          </div>
        </div>   
        <div className={`row valign-wrapper my-3`}>
          <div className="col s4 mx-0">
            <DatePicker
              label="Inicio"
              value={state.inicioAsignaciones}
              onChange={(date) => onChangeDate(date, 'inicioAsignaciones')}
              format="dd/MMM/yyyy"
              dateformat="dd MMMM, YYYY"
              autoOk={true}
              minDate={new Date()}
            />    
          </div>
          <div className="col s3 offset-s1">
            <DatePicker
              label="Fin"
              value={state.finAsignaciones}
              onChange={(date) => onChangeDate(date, 'finAsignaciones')}
              format="dd/MMM/yyyy"
              dateformat="dd MMMM, YYYY"
              autoOk={true}
              minDate={new Date()}
            />    
          </div>
        </div>
        <div className={`row valign-wrapper my-3`}>
          <div className="col s12 left-align">
              <span className={classes.labelLogin}>Periodo de Evaluación</span>
          </div>
        </div>   
        <div className={`row valign-wrapper my-3`}>
          <div className="col s4 mx-0">
            <DatePicker
              label="Inicio"
              value={state.inicioEvaluaciones}
              onChange={(date) => onChangeDate(date, 'inicioEvaluaciones')}
              format="dd/MMM/yyyy"
              dateformat="dd MMMM, YYYY"
              autoOk={true}
              minDate={new Date()}
            />    
          </div>
          <div className="col s3 offset-s1">
            <DatePicker
              label="Fin"
              value={state.finEvaluaciones}
              onChange={(date) => onChangeDate(date, 'finEvaluaciones')}
              format="dd/MMM/yyyy"
              dateformat="dd MMMM, YYYY"
              autoOk={true}
              minDate={new Date()}
            />    
          </div>
        </div>
        <div className={`row valign-wrapper my-3`}>
          <div className="col s12 right-align">
            <Button
              variant="contained"
              component="label"
              onClick={storePeriod}
              variant="contained"
              color="primary"
            >
              <CheckIcon className={`white-text ${classes.labelSearch}`}/>
              <span className={classes.labelUpload}>Guardar</span>
              <input
                type="submit"
                accept="image/*"
                className={classes.input}
                style={{ display: 'none' }}
              />
            </Button>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </div> 
    
  );
}

const StyledSelect = withStyles({
  outlined: {
    padding: '18.5px 14px',
    borderRadius: 0,
    fontFamily: 'Nunito',
    fontSize: '14px',
    color: '#B7B7B7',
  },
})(Select);

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
        maxWidth: '40%',
    },

    labelSearch: {
        fontSize: '15px',
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

    labelUpload: {
        fontFamily : 'Nunito',
        fontSize: '15px',
    },

    labelLittle:{
        fontFamily : 'Nunito',
        fontSize: '15px',
    },

    wrapper: {
      padding: '15px 50px'
    },   

    [`@media (max-width: ${maxWidth}px)`]: {

    }
});

export default withStyles(styles)(PeriodTime);