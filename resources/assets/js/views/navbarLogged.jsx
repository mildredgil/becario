import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavBar = ({classes}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                classes={{root: classes.padding}}
              >
                <i class={`material-icons white-text`}>home</i>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
              </Menu>
            </div>  
            <img class={classes.logo} src="/img/tec-logo-letras.png"/>
          </div>
        </div>
      </nav>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = () => ({
  navContainer: {
    background:' linear-gradient(80.19deg, #47c5ff 0%, #1467ff 100%)',
    margin:'0px',
  },
  nav:{
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

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

const _NavBar = withStyles(styles)(NavBar);

if (document.getElementById('nav')) {
  ReactDOM.render(<_NavBar/>, document.getElementById('nav'));
}