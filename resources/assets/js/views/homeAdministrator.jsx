import React from 'react';
import ReactDOM from 'react-dom';
import CardAdministrator from './cardAdministrator';
import ReglamentoModal from './reglamentoModal';
import CrearAsignModal from './crearAsignModal';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ItemAdministrator from './itemAdministrator';


const Home = ({classes, admin_html}) => {
  const [admin, setAdmin] = React.useState(false);
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
  
  //Load admin
  React.useEffect(()=> {
    
    if(admin_html != null){
      setAdmin(admin_html);
      let _asignaciones = asignaciones;

      admin_html.solicitudes.map(function(asignacion) {
        _asignaciones.push(asignacion);  
      });

      setAsignaciones(_asignaciones);
    }
    
  }, [admin_html]);

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
        <div className={`row ${classes.margin40}`}>
          <div className={`col s12 blue-tec mb-2 ${classes.titleHistory}`}>
              Asignaciones | Agosto-Diciembre 2019
          </div>
        </div> 
        <div  className={`row `}>
          <div className="col s4">
            <div  className={`row `}>
              <div className={`row mb-0 ${classes.paddingRight20}`}>
                <div className={`${classes.itemsWrapper} col s12 card my-0`}>
                  <ItemAdministrator asignacion={null} isSelected={true} handleClick={null}/>    
                </div>
              </div>
            </div>
          </div>
          <div className="col s8">
          <div className="row mb-0">
            <CardAdministrator asignacion={selectedAsignacion}/>
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
    height: '370px',
  },

  margin40: {
    marginTop: '40px',
    marginBottom: '40px'
  },

  labelLogin:{
    fontFamily : 'Nunito',
    fontSize: '20px', 
},

  paddingRight20: {
    paddingRight: '20px',
  },

  titleHistory: {
    fontSize: '30px',
  },

  labelSearch: {
    fontSize: '20px',
    marginRight: '0.5rem',
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
  let _admin = document.getElementById('admin');
  let admin_obj = null;

  if(admin != "") {
    admin_obj = JSON.parse(_admin.value);
    //_admin.parentNode.removeChild(_admin);
  } else {
    admin = null;
  }

  ReactDOM.render(<_Home admin_html={admin_obj}/>, document.getElementById('homeAdministrator'));
}