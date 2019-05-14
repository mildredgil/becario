import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {RightArrowIcon, PersonIcon} from './icons';

const ItemAdministrator = ({classes, asignacion, isSelected, handleClick}) => {
  const evaluacion = ['Pendiente', 'Satisfactoria', 'Insatisfactoria'];
  const new_periodo = ['Invierno', 'Febrero-Junio', 'Verano', 'Agosto-Diciembre'];
  const old_periodo = ['', 'Enero-Mayo', 'Verano', 'Agosto-Diciembre'];
  
  let periodo = '';
  
  /*let _date = asignacion.fecha_asignacion;
  let date = new Date(_date);
  let year = date.getFullYear();
  let month = date.getMonth();
  let periodo_string = '';

  if(year >= 2020) {
    periodo = new_periodo;

    if(month == 0) {
      periodo_string = periodo[0];
    } else if (month == 1) {
      periodo_string = periodo[1];
    } else if (month == 6) {
      periodo_string = periodo[2];
    } else {
      periodo_string = periodo[3];
    }
  } else {
    periodo = old_periodo;
    if (month == 0) {
      periodo_string = periodo[1];
    } else if (month == 5) {
      periodo_string = periodo[2];
    } else {
      periodo_string = periodo[3];
    }
  }*/

  return (
    <div onClick={handleClick} className={`${isSelected ? classes.selected :classes.itemWrapper} hoverable row valign-wrapper py-2 px-2 mb-0`}>
      <div className="col s10">
        <label className={`${classes.periodo} blue-tec`}>Colaborador: {asignacion.colaborador.nombre_completo} </label>
        <br/>
        <label className={`${classes.colab} truncate blue-tec-dark`}>
          <PersonIcon className={classes.iconLabel}/>
          Alumno: {asignacion.estudiante.nombre_completo}
        </label>
      </div>
      <div className={`col s2`}>
        <RightArrowIcon className={`hide ${classes.icon} ${isSelected ? classes.itemIcon : ''} `} />
      </div>
    </div>
  );
}

const maxWidth = 1000;

const styles = theme => ({
  itemWrapper: {
    borderBottom: '1px solid rgba(34,  63, 147, 0.2)',
    cursor: 'pointer',
    '&:hover': {
      background: "#223f9320",
    },
  },
  
  selected: {
    background: "#223f9320",
    cursor: 'pointer'
  },

  iconLocation: {
    fontSize: '12px'
  },
  
  itemIcon: {
    display: "inline-block !important",
  },

  icon:  {
    color:"#223f93",
    fontSize: '17px',
    marginRight: '0.5rem'
  },

  iconLabel:  {
    color:"#223f93",
    fontSize: '12px',
    marginRight: '0.5rem'
  },

  periodo: {
    fontSize: '20px',
    fontWeight: 'bold'
  },

  colab: {
    fontSize: '12px',
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(ItemAdministrator);