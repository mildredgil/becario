import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { DatePicker } from "@material-ui/pickers";
import esLocale from 'date-fns/locale/es';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import {  DescriptionIcon, ClockIcon, CheckIcon } from '../../icons';

const PeriodTime = ({ classes }) => {
  const [state, setState] = React.useState({
    inicioAsignaciones: new Date(),
    finAsignaciones: new Date(),
    inicioEvaluaciones: new Date(),
    finEvaluaciones: new Date()
  });
  
  //const [dateError, setDateError] = React.useState(false);
  
  const searchClick = () => {
    console.log("hi");
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
    console.log(state);
  return (
    <div className={classes.wrapper}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
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
          <div className="col s4 center-align mx-0">
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
          <div className="col s2 offset-s2 right-align">
            <Button
              fullWidth 
              variant="contained"
              component="label"
              onClick={searchClick}
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
        <div className="divider"></div> 
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
          <div className="col s4 center-align mx-0">
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
          <div className="col s2 offset-s2 right-align">
            <Button
              fullWidth
              variant="contained"
              component="label"
              onClick={searchClick}
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
        {/*<DatePicker
          clearable={true}
          format="dd/MMM/yyyy"
          dateformat="dd MMMM, YYYY"
          label={"Elige una fecha"}
          minDate={new Date()}
          onChange={(date) => onChangeDate}(date, 'inicioAsignaciones') 
          autoOk={true}
          error={dateError}
          helperText={dateError? 'La fecha tiene que ser válida.' : null}
          value={date}
          variant="outlined"
          leftArrowIcon={<LeftArrowIcon />}
          rightArrowIcon={<RightArrowIcon />}
        /> */}
    </div> 
    
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