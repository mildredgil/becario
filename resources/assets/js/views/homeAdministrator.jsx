import React from 'react';
import ReactDOM from 'react-dom';
import CardEstudiante from './cardEstudiante';
import ItemBecario from './itemBecario';
import ReglamentoModal from './reglamentoModal';
import CrearAsignModal from './crearAsignModal';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import {ListIcon} from './icons';

const Home = ({classes, estudiante_html}) => {
  const [estudiante, setEstudiante] = React.useState(false);
  const [selectedAsignacion, setSelectedAsignacion] = React.useState(false);
  const [asignaciones, setAsignaciones] = React.useState([]);
  const [indexSelected, setIndexSelected] = React.useState(0);
  const new_periodo = ['Invierno', 'Febrero-Junio', 'Verano', 'Agosto-Diciembre'];
  const old_periodo = ['', 'Enero-Mayo', 'Verano', 'Agosto-Diciembre'];
  const [periodo, setPeriodo] = React.useState(0);
  const periodoOptions = [];
  const yearOptions = [];
  const [selectYear, setYear] = React.useState(0);

  const [openCrearAsign, setOpenCrearAsign] = React.useState(false);

  const handleOpenCrearAsign = () => {
    setOpenCrearAsign(true);
  };

  const handleCloseCrearAsign = () => {
    setOpenCrearAsign(false);
  };

  periodoOptions.push(<MenuItem classes={{ root: classes.options}} value={0}>{new_periodo[0]}</MenuItem>);
  periodoOptions.push(<MenuItem classes={{ root: classes.options}} value={1}>{new_periodo[1]}</MenuItem>);
  periodoOptions.push(<MenuItem classes={{ root: classes.options}} value={2}>{new_periodo[2]}</MenuItem>);
  periodoOptions.push(<MenuItem classes={{ root: classes.options}} value={3}>{new_periodo[3]}</MenuItem>);
  yearOptions.push(<MenuItem classes={{ root: classes.options}} value={2013}>2013</MenuItem>);
  yearOptions.push(<MenuItem classes={{ root: classes.options}} value={2014}>2014</MenuItem>);
  yearOptions.push(<MenuItem classes={{ root: classes.options}} value={2015}>2015</MenuItem>);
  yearOptions.push(<MenuItem classes={{ root: classes.options}} value={2016}>2016</MenuItem>);
  yearOptions.push(<MenuItem classes={{ root: classes.options}} value={2017}>2017</MenuItem>);
  yearOptions.push(<MenuItem classes={{ root: classes.options}} value={2018}>2018</MenuItem>);
  yearOptions.push(<MenuItem classes={{ root: classes.options}} value={2019}>2019</MenuItem>);
  yearOptions.push(<MenuItem classes={{ root: classes.options}} value={2020}>2020</MenuItem>);
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
        <div className={`row`}>
          <Button variant="contained" color="primary" onClick={handleOpenCrearAsign}>
            <ListIcon className={`white-text ${classes.labelCheck}`}/>
            <span className={classes.labelLogin}>Crear/Borrar Asignacion</span>
          </Button>
        </div>
        <div className={`row ${classes.margin40}`}>
          <div className={`col s12 blue-tec mb-2 ${classes.titleHistory}`}>
            <div className="col s9">
              <span className={classes.labelLogin}>Becarios | Agosto-Diciembre 2019</span>
            </div>
            <div className="col s3 align-right">
              <Button
                  variant="contained"
                  color="primary">
                  <ListIcon className={`white-text ${classes.labelCheck}`}/>
                  <span className={classes.labelLogin}>Evaluar alumnos</span>
              </Button>
            </div>
          </div>
        </div> 
        <div  className={`row `}>
          <div className="col s4">
            <div  className={`row `}>
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
                  value={selectYear}
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
              <div className={`row mb-0 ${classes.paddingRight20}`}>
                <div className={`${classes.itemsWrapper} col s12 card my-0`}>
                {
                  estudiante && 
                  estudiante.solicitudes_becarias.map((asignacion, index) => {
                    if(index == indexSelected) {
                      console.log(true, index);
                      return (
                        <ItemBecario isSelected={true} handleClick={(e) => selectAsignacion(index)} key={index} asignacion={asignacion}/>
                      )   
                    } else {
                      return (
                        <ItemBecario isSelected={false} handleClick={(e) => selectAsignacion(index)} key={index} asignacion={asignacion}/>
                      )   
                    }                  
                  })
                }
                </div>
              </div>
            </div>
          </div>
          <div className="col s8">
          <div className="row mb-0">
            <CardEstudiante asignacion={selectedAsignacion}/>
          </div>
        </div>  
        </div>
      </div>
      <ReglamentoModal/>
      <CrearAsignModal open={openCrearAsign} handleClose={handleCloseCrearAsign} />
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

  labelLogin:{
    fontFamily : 'Nunito',
    fontSize: '20px', 
  },

  labelCheck: {
    fontSize: '20px',
    marginRight: '0.5rem',
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

const _Home = withStyles(styles)(Home);

if (document.getElementById('homeAdministrator')) {
  let _estudiante = document.getElementById('estudiante');
  let estudiante_obj = null;

  if(estudiante != "") {
    estudiante_obj = JSON.parse(_estudiante.value);
    _estudiante.parentNode.removeChild(_estudiante);
  } else {
    estudiante = null;
  }

  ReactDOM.render(<_Home estudiante_html={estudiante_obj}/>, document.getElementById('homeAdministrator'));
}