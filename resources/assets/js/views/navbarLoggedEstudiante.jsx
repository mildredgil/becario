import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'; 

import PerfilEstudiantes from '../components/estudiante/perfilEstudiante';
import ReglamentoModal from '../components/reglamentoModal';
import { PowerIcon, PersonEditIcon, DescriptionIcon } from '../icons';
import defaultTheme from '../theme';

const NavBar = ({ classes, estudiante_html }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openReglamento, setOpenReglamento] = React.useState(false);
  const [estudiante, setEstudiante] = React.useState(estudiante_html);

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
            <div className={`col s8 white-text ${classes.nav}`}>
              Asignación Becaria
            </div>
            <div className={`col s1 offset-s2 white-text nav center-align ${classes.nav}`}>
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
                <MenuItem onClick={ logout} className="valign-wrapper">
                  <PowerIcon className={classes.iconLabel} />
                  Cerrar Sesión
                </MenuItem>
              </Menu>
            </div>
            <img className={classes.logo} src="/img/tec-logo-letras.png" />
          </div>
        </div>
      </nav>
      <PerfilEstudiantes open={open} handleClose={handleClosePerfil} estudiante={estudiante} setEstudiante={setEstudiante} />
      <ReglamentoModal open={openReglamento} handleClose={handleCloseReglamento} />
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = () => ({
  navContainer: {
    background: ' linear-gradient(80.19deg, #101010 0%, #223f93 100%)',
    margin: '0px',
  },
  nav: {
    fontSize: '24px',
    fontFamily: 'Nunito',
    letterSpacing: '12px',
    textTransform: 'uppercase',
    fontWeight: 'lighter,'
  },
  containerExtended: {
    width: '90%',
    margin: '0 auto',
  },
  icon: {
    cursor: 'pointer',
  },
  //  backgroundColor: '#46c2ff75',
  padding: {
    padding: '0px',
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
  let _estudiante = document.getElementById('estudiante');
  let estudiante_obj = null;

  if (estudiante != "") {
    estudiante_obj = JSON.parse(_estudiante.value);
    //_estudiante.parentNode.removeChild(_estudiante);
  } else {
    estudiante = null;
  }

    ReactDOM.render(<_NavBar estudiante_html={estudiante_obj} />, document.getElementById('nav'));  
}