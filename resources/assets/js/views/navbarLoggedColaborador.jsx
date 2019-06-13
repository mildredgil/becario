import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import axios from 'axios'; 

import defaultTheme from '../theme';
import PerfilColaboradores from '../components/colaborador/perfilColaboradores';
import ReglamentoModal from '../components/reglamentoModal';
import SolicitudBecaria from '../components/colaborador/solicitudBecModal';
import { AddIcon, PowerIcon, PersonEditIcon, DescriptionIcon } from '../icons';

const NavBar = ({ classes, colaborador_html }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openReglamento, setOpenReglamento] = React.useState(false);
  const [openSolicitudBec, setOpenSolicitudBec] = React.useState(false);
  const [colaborador, setColaborador] = React.useState(colaborador_html);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  const handleOpenSolicitud = () => {
    setOpenSolicitudBec(true);
  };

  const handleCloseSolicitud = () => {
    setOpenSolicitudBec(false);
  };

  const logout = () => {
    axios.post("/logout", {
    })
    .then(function (response) {
      console.log(response);
      window.location.replace('/');
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
            <div className={`col s6 offset-s1 white-text ${classes.nav}`}>
              Asignación Becaria
            </div> 
						<div className={'col s5 right-align'}>
							<Fab variant="extended" size="small" color="secondary" aria-label="Delete" className={classes.fab}
                  onClick={handleOpenSolicitud} className="valign-wrapper">
                 <AddIcon className={`blue-tec ${classes.addIcon}`} />
									<label className={`blue-tec ${classes.becarioStyle}`}>
										Becarios
									</label>
              </Fab>
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
                <MenuItem onClick={handleOpenPerfil} className="valign-wrapper">
                  <PersonEditIcon className={classes.iconLabel} />
                  Perfil
                </MenuItem>
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
            <img className={classes.logo} src="/img/tec-logo-letras.png" />
          </div>
        </div>
      </nav>
      <PerfilColaboradores open={open} handleClose={handleClosePerfil} colaborador={colaborador} setColaborador={setColaborador} />
      <ReglamentoModal open={openReglamento} handleClose={handleCloseReglamento} />
      <SolicitudBecaria open={openSolicitudBec} handleClose={handleCloseSolicitud} />
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = () => ({
  navContainer: {
    background: 'linear-gradient(80.19deg, #101010 0%, #223f93 100%)',
    margin: '0px',
  },

  nav: {
    fontSize: '24px',
    fontFamily: 'Nunito',
    letterSpacing: '12px',
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

  becarioStyle: {
    cursor: 'pointer',
    letterSpacing: '3px',
    fontSize: '14px',
  },

  addIcon: {
    fontSize: '18px',
    marginRight: '5px',
  },

  logo: {
    width: '60px',
    position: 'absolute',
    right: '10px',
  },

  iconLabel: {
    fontSize: '18px',
    marginRight: '0.5rem'
  },

  [`@media (max-width: ${maxWidth}px)`]: {

  }
});

const _NavBar = withStyles(styles)(NavBar);
if (document.getElementById('nav')) {
  let _colaborador = document.getElementById('colaborador');
  let colaborador_obj = null;

  if (colaborador != "") {
    colaborador_obj = JSON.parse(_colaborador.value);
    //_colaborador.parentNode.removeChild(_colaborador);
  } else {
    colaborador = null;
  }

  if (document.getElementById('nav')) {
    ReactDOM.render(<_NavBar colaborador_html={colaborador_obj} />, document.getElementById('nav'));
  }
}