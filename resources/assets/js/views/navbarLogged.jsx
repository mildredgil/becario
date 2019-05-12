import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PerfilColaboradores from './perfilColaboradores';
import PerfilEstudiantes from './perfilEstudiante';
import ReglamentoModal from './reglamentoModal';
import { PowerIcon, PersonEditIcon, DescriptionIcon } from './icons';

const NavBar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openReglamento, setOpenReglamento] = React.useState(false);

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

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <nav class={`navbar navbar-default ${classes.navContainer}`}>
        <div class={classes.containerExtended}>
          <div class="row valign-wrapper">
            <div class={`col s8 white-text ${classes.nav}`}>
              Asignación Becaria
            </div>
            <div class={`col s1 offset-s2 white-text nav center-align ${classes.nav}`}>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                classes={{ root: classes.padding }}
              >
                <i class={`material-icons white-text`}>home</i>
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
                <MenuItem onClick={handleClose} className="valign-wrapper">
                  <PowerIcon className={classes.iconLabel} />
                  Cerrar Sesión
                </MenuItem>
              </Menu>
            </div>
            <img class={classes.logo} src="/img/tec-logo-letras.png" />
          </div>
        </div>
      </nav>
      <PerfilColaboradores open={open} handleClose={handleClosePerfil} />
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
  ReactDOM.render(<_NavBar />, document.getElementById('nav'));
}