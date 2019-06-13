import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import defaultTheme from '../theme';
import CardColaborador from '../components/estudiante/cardColaborador';
import ItemPeriodo from '../components/estudiante/itemPeriodo';
import ReglamentoModal from '../components/reglamentoModal';

const Home = ({classes, estudiante_html}) => {
  const [estudiante, setEstudiante] = React.useState(false);
  const [selectedAsignacion, setSelectedAsignacion] = React.useState(false);
  const [asignaciones, setAsignaciones] = React.useState([]);
  const [indexSelected, setIndexSelected] = React.useState(0);
  const new_periodo = ['Invierno', 'Febrero-Junio', 'Verano', 'Agosto-Diciembre'];
  const old_periodo = ['', 'Enero-Mayo', 'Verano', 'Agosto-Diciembre'];
  const[periodo_string, setPeriodo] = React.useState('');
  const [year, setYear] = React.useState(0);
  //let periodo_string = '';

  React.useEffect(()=> {
    periodoSelected();
  }, [selectedAsignacion]);

  const periodoSelected = () => {
    let periodo = '';
    let _date = selectedAsignacion.fecha_asignacion;
    let date = new Date(_date);
    let year = date.getFullYear();
    let month = date.getMonth();
    setYear(year);
    if(year >= 2020) {
      periodo = new_periodo;

      if(month == 0) {
        setPeriodo(periodo[0]);
      } else if (month == 1) {
        setPeriodo(periodo[1]);
      } else if (month == 6) {
        setPeriodo(periodo[2]);
      } else {
        setPeriodo(periodo[3]);
      }
    } else {
      periodo = old_periodo;
      if (month == 0) {
        setPeriodo(periodo[1]);
      } else if (month == 5) {
        setPeriodo(periodo[2]);
      } else {
        setPeriodo(periodo[3]);
      }
    }
  }
  
  React.useEffect(()=> {
    
    if(estudiante_html != null){
      setEstudiante(estudiante_html);
      let _asignaciones = asignaciones;

      estudiante_html.solicitudes_becarias.map(function(asignacion) {
        _asignaciones.push(asignacion);  
      });

      setAsignaciones(_asignaciones);
    }
    
  }, [estudiante_html]);

  React.useEffect(()=> {
    if(asignaciones.length > 0) {
      setSelectedAsignacion(asignaciones[0]);
      periodoSelected();
    }
  }, [asignaciones]);

  console.log(selectedAsignacion);

  const selectAsignacion = (index) => {
    setSelectedAsignacion(asignaciones[index]);
    setIndexSelected(index);
  }

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="container">
        <div className={`row ${classes.margin40}`}>
          <div className={`col s12 blue-tec mb-2 ${classes.titleHistory}`}>
          Becario | {periodo_string} {year}
          </div>
          <div className="col s4">
            <div className={`row mb-0 ${classes.paddingRight20}`}>
              <div className={`${classes.itemsWrapper} col s12 card my-0`}>
              {
                estudiante && 
                estudiante.solicitudes_becarias.map((asignacion, index) => {
                  if(index == indexSelected) {
                    console.log(true, index);
                    return (
                      <ItemPeriodo isSelected={true} handleClick={(e) => selectAsignacion(index)} key={index} asignacion={asignacion}/>
                    )   
                  } else {
                    return (
                      <ItemPeriodo isSelected={false} handleClick={(e) => selectAsignacion(index)} key={index} asignacion={asignacion}/>
                    )   
                  }                  
                })
              }
              </div>
            </div>
          </div>
          <div className="col s8">
            <div className="row mb-0">
              <CardColaborador asignacion={selectedAsignacion}/>
            </div>
          </div>
        </div>
      </div>
      <ReglamentoModal/>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = theme => ({
  itemsWrapper: {
    overflowY: 'scroll',
    height: '363px',
  },

  margin40: {
    marginTop: '40px',
    marginBottom: '40px'
  },

  paddingRight20: {
    paddingRight: '20px',
  },

  titleHistory: {
    fontSize: '30px',
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

const _Home = withStyles(styles)(Home);

if (document.getElementById('content')) {
  let _estudiante = document.getElementById('estudiante');
  let estudiante_obj = null;

  if(estudiante != "") {
    estudiante_obj = JSON.parse(_estudiante.value);
    //_estudiante.parentNode.removeChild(_estudiante);
  } else {
    estudiante = null;
  }

  ReactDOM.render(<_Home estudiante_html={estudiante_obj}/>, document.getElementById('content'));
}