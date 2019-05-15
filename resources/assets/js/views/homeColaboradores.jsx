import React from 'react';
import ReactDOM from 'react-dom';
import CardEstudiante from './cardEstudiante';
import ItemBecario from './itemBecario';
import ReglamentoModal from './reglamentoModal';
import EvaluacionModal from './evaluacionModal';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { ListIcon } from './icons';

const Home = ({ classes, colaborador_html }) => {
  const [colaborador, setColaborador] = React.useState(false);
  const [selectedAsignacion, setSelectedAsignacion] = React.useState(false);
  const [asignaciones, setAsignaciones] = React.useState([]);
  const [indexSelected, setIndexSelected] = React.useState(0);
  const new_periodo = ['Invierno', 'Febrero-Junio', 'Verano', 'Agosto-Diciembre'];
  const old_periodo = ['', 'Enero-Mayo', 'Verano', 'Agosto-Diciembre'];
  const [periodo, setPeriodo] = React.useState(0);
  const periodoOptions = [];
  const [yearOptions, setYearOptions] = React.useState([]);
  const [yearSelected, setYearSelected] = React.useState(0);
  const [selectYear, setYear] = React.useState(0);
  const [openEvaluacion, setOpenEvaluacion] = React.useState(false);
  const[periodo_string, setPeriodoString] = React.useState('');

  React.useEffect(()=> {
    periodoSelected();
  }, [selectedAsignacion]);

  const periodoSelected = () => {
    let periodo = '';
    let _date = selectedAsignacion.fecha_asignacion;
    let date = new Date(_date);
    let year = date.getFullYear();
    let month = date.getMonth();
    if(year >= 2020) {
      periodo = new_periodo;

      if(month == 0) {
        setPeriodoString(periodo[0]);
      } else if (month == 1) {
        setPeriodoString(periodo[1]);
      } else if (month == 6) {
        setPeriodoString(periodo[2]);
      } else {
        setPeriodoString(periodo[3]);
      }
    } else {
      periodo = old_periodo;
      if (month == 0) {
        setPeriodoString(periodo[1]);
      } else if (month == 5) {
        setPeriodoString(periodo[2]);
      } else {
        setPeriodoString(periodo[3]);
      }
    }
  }
  

  const handleOpenEvaluacion = () => {
    setOpenEvaluacion(true);
  };

  const handleCloseEvaluacion = () => {
    setOpenEvaluacion(false);
  };

  periodoOptions.push(<MenuItem classes={{ root: classes.options }} value={0}>{new_periodo[0]}</MenuItem>);
  periodoOptions.push(<MenuItem classes={{ root: classes.options }} value={1}>{new_periodo[1]}</MenuItem>);
  periodoOptions.push(<MenuItem classes={{ root: classes.options }} value={2}>{new_periodo[2]}</MenuItem>);
  periodoOptions.push(<MenuItem classes={{ root: classes.options }} value={3}>{new_periodo[3]}</MenuItem>);
   
  React.useEffect(() => {
    console.log(colaborador);
    if (colaborador_html != null) {
      setColaborador(colaborador_html);
      let _asignaciones = asignaciones;
      let _yearsTemp = [];
      let _years = yearOptions;

      colaborador_html.solicitudes_becarias.map(function (asignacion) {
        _asignaciones.push(asignacion);
        let _date = asignacion.fecha_asignacion;
        let date = new Date(_date);
        let year = date.getFullYear();
        let month = date.getMonth();
        if(!_yearsTemp.includes(year))
          _yearsTemp.push(year);
      });

      _yearsTemp.map(function(year, index) {
        if(index == 0) {
          setYearSelected(year);
        }
        _years.push(<MenuItem classes={{ root: classes.options }} value={year}>{year}</MenuItem>);
      });

      setAsignaciones(_asignaciones);
      setYearOptions(_years);
    }
    console.log(yearOptions[0]);

  }, [colaborador_html]);

  React.useEffect(() => {
    if (asignaciones.length > 0) {
      setSelectedAsignacion(asignaciones[0]);
      periodoSelected();
    }
  }, [asignaciones]);

  console.log(selectedAsignacion);

  const selectAsignacion = (index) => {
    setSelectedAsignacion(asignaciones[index]);
    setIndexSelected(index);
  }

  const onChangePeriod = (event) => {
    setPeriodo(event.target.value);
  }

  const onChangeYear = (event) => {
    setYear(event.target.value);
  }
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="container">
        <div className={`row ${classes.margin40}`}>
          <div className={`col s12 blue-tec mb-2 ${classes.titleHistory} px-0`}>
            <div className="col s9">
              Becarios | {periodo_string} {yearSelected}
            </div>
            <div className="col s3 align-right px-0">
              <Button className="valign-wrapper" style={{ float: 'right', }} variant="contained" color="primary" onClick={handleOpenEvaluacion}>
                <ListIcon className={`white-text ${classes.labelCheck}`} />
                <span className={classes.labelLogin}>Evaluar alumnos</span>
              </Button>
            </div>
          </div>
        </div>
        <div className={`row `}>
          <div className={`col s4 ${classes.paddingRight20}`}>
            <div className={`row margin-0`}>
              <div className="col s6">
                <FormControl variant="outlined" fullWidth={true} margin="normal">
                  <InputLabel
                    htmlFor="lada"
                  >
                    Periodo
                </InputLabel>
                  <StyledSelect
                    value={periodo}
                    onChange={onChangePeriod}
                    input={
                      <OutlinedInput
                        name="lada"
                        id="lada"
                        labelWidth={48}
                      />
                    }
                  //MenuProps={{classes:{paper: maxHeight}}}
                  >
                    {periodoOptions}
                  </StyledSelect>
                </FormControl>
              </div>
              <div className="col s6">
                <FormControl variant="outlined" fullWidth={true} margin="normal">
                  <InputLabel
                    htmlFor="lada"
                  >
                    Año
                </InputLabel>
                  <StyledSelect
                    value={yearSelected}
                    onChange={onChangeYear}
                    input={
                      <OutlinedInput
                        name="lada"
                        id="lada"
                        labelWidth={48}
                      />
                    }
                  //MenuProps={{classes:{paper: maxHeight}}}
                  >
                    {yearOptions}
                  </StyledSelect>
                </FormControl>
              </div>
            </div>    
            <div className={`row mb-0`}>
                <div className={`${classes.itemsWrapper} col s12 card my-0`}>
                  {
                    colaborador &&
                    colaborador.solicitudes_becarias.map((asignacion, index) => {
                        if(asignacion.estudiante != null){
                          if (index == indexSelected) {
                          console.log(true, index);
                          console.log(true, asignacion);
                          return (
                            <ItemBecario isSelected={true} handleClick={(e) => selectAsignacion(index)} key={index} asignacion={asignacion} />
                          )
                        } else {
                          return (
                            <ItemBecario isSelected={false} handleClick={(e) => selectAsignacion(index)} key={index} asignacion={asignacion} />
                          )
                        }
                      }
                    })
                  }
                </div>
              </div>
          </div>
          <div className="col s8">
            <div className="row mb-0">
              {selectedAsignacion.estudiante && <CardEstudiante asignacion={selectedAsignacion} />}
            </div>
          </div>
        </div>
      </div>
      <ReglamentoModal />
      {asignaciones.length > 0 ? <EvaluacionModal open={openEvaluacion} handleClose={handleCloseEvaluacion} asignaciones={asignaciones} /> : ''}
    </MuiThemeProvider>
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
  itemsWrapper: {
    overflowY: 'scroll',
    height: '300px',
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

  labelLogin: {
    fontFamily: 'Nunito',
    fontSize: '16px',
  },

  labelCheck: {
    fontSize: '20px',
    marginRight: '0.5rem',
  },

  [`@media (max-width: ${maxWidth}px)`]: {

  }
});

const _Home = withStyles(styles)(Home);

if (document.getElementById('homeColaborador')) {
  let _colaborador = document.getElementById('colaborador');
  let colaborador_obj = null;

  if (colaborador != "") {
    colaborador_obj = JSON.parse(_colaborador.value);
    //_colaborador.parentNode.removeChild(_colaborador);
  } else {
    colaborador = null;
  }

  ReactDOM.render(<_Home colaborador_html={colaborador_obj} />, document.getElementById('homeColaborador'));
}