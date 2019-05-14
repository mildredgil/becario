import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BorrarAsignModal from './borrarAsignModal';
import CrearAsignModal from './crearAsignModal';
import {AddIcon} from './icons';
import ReglamentoModal from './reglamentoModal';
import ImportarCSV from './importarCSV';
import axios from 'axios';
import { PowerIcon, PersonEditIcon, UpLoadIcon, DescriptionIcon, CreateIcon, DeleteIcon } from './icons';

const NavBar = ({ classes }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [openReglamento, setOpenReglamento] = React.useState(false);
    const [openBorrarAsig, setBorrarAsig] = React.useState(false);
    const [openCrearAsig, setCrearAsig] = React.useState(false);
    const [openImportarCSV, setOpenImportarCSV] = React.useState(false);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      //window.location.replace("/login");
    };

    const handleClick2 = event => {
      setAnchorEl2(event.currentTarget);
    };
  
    const handleCloseEdit = () => {
      setAnchorEl2(null);
      //window.location.replace("/login");
    };
  
    const handleOpenPerfil = () => {
      setOpen(true);
    };
  
    const handleClosePerfil = () => {
      setOpen(false);
    };
  
    const handleOpenReglamento = () => {
      setOpenReglamento(true);
    };
  
    const handleCloseReglamento = () => {
      setOpenReglamento(false);
    };

    const handleOpenDelete = () => {
      setBorrarAsig(true);
    };
  
    const handleCloseDelete = () => {
      setBorrarAsig(false);
    };

    const handleOpenCreate = () => {
      setCrearAsig(true);
    };
  
    const handleCloseCreate = () => {
      setCrearAsig(false);
    };
  
    const handleOpenImport = () => {
      setOpenImportarCSV(true);
    };
  
    const handleCloseImport = () => {
      setOpenImportarCSV(false);
    };

    
    const logout = () => {
      axios.post("/logout", {
      })
      .then(function (response) {
        console.log(response);
        window.location.replace('/loginAdmin');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    return (
      <MuiThemeProvider theme={defaultTheme}>
        <nav className={`navbar navbar-default ${classes.navContainer}`}>
          <div className={classes.containerExtended}> 
            <div className="row valign-wrapper">
              <div className={`col s10 offset-s1 white-text ${classes.nav}`}>
                Asignación Becaria
                <label className={classes.navRole}>Administrador</label>
              </div> 
              <div className={`col s1  white-text nav center-align ${classes.nav}`}>
                <Button
                  aria-owns={anchorEl2 ? 'simple-menu2' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick2}
                  classes={{ root: classes.editIcon }}
                >
                  <CreateIcon className={`${classes.createLabel}`} />
                </Button>
                <Menu
                  id="simple-menu2"
                  anchorEl={anchorEl2}
                  open={Boolean(anchorEl2)}
                  onClose={handleCloseEdit}
                >
                  <MenuItem onClick={handleOpenCreate} className="valign-wrapper">
                    <AddIcon className={classes.iconLabel} />
                    Crear asignación
                </MenuItem>
                <MenuItem onClick={handleOpenDelete} className="valign-wrapper">
                    <DeleteIcon className={classes.iconLabel} />
                    Borrar asignación
                  </MenuItem>
                </Menu>
              </div>
              <div className={`col s1  white-text nav center-align ${classes.nav}`}>
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  classes={{ root: classes.padding }}
                >
                  <i className={`material-icons white-text`}>home</i>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {/*<MenuItem onClick={handleOpenPerfil} className="valign-wrapper">
                    <PersonEditIcon className={classes.iconLabel} />
                    Perfil
                  </MenuItem>*/}
                  <MenuItem onClick={handleOpenReglamento} className="valign-wrapper">
                    <DescriptionIcon className={classes.iconLabel} />
                    Reglamento
                  </MenuItem>
                  <MenuItem onClick={logout} className="valign-wrapper">
                    <PowerIcon className={classes.iconLabel} />
                    Cerrar Sesión
                </MenuItem>
                </Menu>
              </div>  
              <img className={classes.logo} src="/img/tec-logo-letras.png"/>
            </div>
          </div>
        </nav>
        <ReglamentoModal open={openReglamento} handleClose={handleCloseReglamento} />
        <BorrarAsignModal open={openBorrarAsig} handleClose={handleCloseDelete} />
        <CrearAsignModal open={openCrearAsig} handleClose={handleCloseCreate} />
      </MuiThemeProvider>
    );
  }
  
  const maxWidth = 1000;
  
  const styles = () => ({
    navContainer: {
      background: 'linear-gradient(80.19deg, #101010 0%, #223f93 100%)',
      margin:'0px',
      },
      
    nav:{
      fontSize: '24px',
      fontFamily: 'Nunito',
      letterSpacing: '12px',
      textTransform: 'uppercase',
      fontWeight: 'lighter', 
    },

    navRole:{
      fontSize: '16px',
      fontFamily: 'Nunito',
      letterSpacing: '6px',
      textTransform: 'uppercase',
      fontWeight: 'lighter', 
    },
      
    containerExtended: {
      width: '90%',
      margin: '0 auto',
    },
      
    icon: {
      cursor: 'pointer',
    },
      
    padding: {
      padding: '0px',
    },

    editIcon: {
      padding: '0px',
      height: '-webkit-fill-available',
    },
  
    becarioStyle: {
      cursor: 'pointer',
      letterSpacing: '3px',
      fontSize: '14px',
    },
      
    addIcon:{
      fontSize: '18px',
      marginRight: '0px',
    },
  
    logo: {
      width: '60px',
      position: 'absolute',
      right: '10px',
    },
  
    iconLabel: {
      fontSize: '18px',
      marginRight: '0.5rem',
    },

    createLabel: {
      fontSize: '22px',
      fill: 'white',
    },
    
  
    [`@media (max-width: ${maxWidth}px)`]: {
  
    }
  });
  
  const _NavBar = withStyles(styles)(NavBar);
  
  if (document.getElementById('nav')) {
    ReactDOM.render(<_NavBar />, document.getElementById('nav'));
  }