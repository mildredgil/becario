import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import {UpLoadIcon, UpArrowIcon, DownArrowIcon, ClockIcon} from '../icons';
import defaultTheme from '../theme';
import CSV from '../components/admin/csv';
import PeriodTime from '../components/admin/periodTime'; 
import AutomaticSystem from '../components/admin/automaticSystem'; 

const Configuraciones = ({classes}) => {
  const [state, setState] = React.useState({
    showArrow: [false,false,false]
  });
  let arrowPeriod = state.showArrow[0] ? <UpArrowIcon className={`blue-tec ${classes.icon} `} /> : <DownArrowIcon className={`blue-tec ${classes.icon} `} />;
  let arrowUpload = state.showArrow[1] ? <UpArrowIcon className={`blue-tec ${classes.icon} `} /> : <DownArrowIcon className={`blue-tec ${classes.icon} `} />;
  let arrowAutomatic = state.showArrow[2] ? <UpArrowIcon className={`blue-tec ${classes.icon} `} /> : <DownArrowIcon className={`blue-tec ${classes.icon} `} />;

  const onClickArrow = (arrow) => {
    let newState = state;
    let showArrow = newState.showArrow;
    showArrow[arrow] = !showArrow[arrow];
    
    setState({
      showArrow  
    });
  }
  
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className='row mb-0 my-3 valign-wrapper container'>
        <div className='col s12'>
          <label className={`blue-tec ${classes.title}`}>
            Configuración del Sistema
          </label>
        </div>
      </div>
      <div className={`${classes.marginAuto} container card my-5`}>
        <div className='row mb-0 valign-wrapper blue-tec-light-b'  onClick={() => onClickArrow(0)}>
          <div className='col s10'>
            <label className={`blue-tec valign-wrapper ${classes.label}`}>
              <ClockIcon className={classes.iconEditLabel} />  
              Configuración de Periodo 
            </label>
          </div>
          <div className='col s2 right-align'>
            {arrowPeriod}
          </div>
        </div>
        {state.showArrow[0] && <PeriodTime/> }
        <div className="divider"></div>
        <div className='row mb-0 valign-wrapper blue-tec-light-b' onClick={() => onClickArrow(1)}>
          <div className='col s10'>
            <label className={`blue-tec valign-wrapper ${classes.label}`}>
              <UpLoadIcon className={classes.iconEditLabel} />  
              Actualizar Datos - Subir archivos CSV
            </label>
          </div>
          <div className='col s2 right-align'>
            {arrowUpload}
          </div>
        </div>
        {state.showArrow[1] && <CSV/> }
        <div className="divider"></div>
        <div className='row mb-0 valign-wrapper blue-tec-light-b'  onClick={() => onClickArrow(2)}>
          <div className='col s10'>
            <label className={`blue-tec valign-wrapper ${classes.label}`}>
              <ClockIcon className={classes.iconEditLabel} />  
              Generar Asignación Automatica
            </label>
          </div>
          <div className='col s2 right-align'>
            {arrowAutomatic}
          </div>
        </div>
        {state.showArrow[2] && <AutomaticSystem/> }
      </div>  
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = () => ({
  icon:  {
    fontSize: '17px',
    marginRight: '0.5rem'
  },

  label: {
    fontSize: '30px'
  },

  marginAuto: {
    margin: 'auto'
  },

  title: {
    fontSize: '40px'
  },

  iconEditLabel: {
    color: "#223f93",
    fontSize: '30px',
    marginRight: '0.5rem'
  },

  [`@media (max-width: ${maxWidth}px)`]: {

  }
});

const _Configuraciones = withStyles(styles)(Configuraciones);

if (document.getElementById('configuraciones')) {
  ReactDOM.render(<_Configuraciones />, document.getElementById('configuraciones'));
}