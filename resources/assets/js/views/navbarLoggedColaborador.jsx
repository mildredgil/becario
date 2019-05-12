import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PerfilColaboradores from './perfilColaboradores';
import Fab from '@material-ui/core/Fab';

import {AddIcon} from './icons';


const NavBar = ({classes}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
 

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
  
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <nav className={`navbar navbar-default ${classes.navContainer}`}>
        <div className={classes.containerExtended}> 
          <div className="row valign-wrapper">
            <div className={`col s8 offset-s1 white-text ${classes.nav}`}>
              Asignación Becaria
            </div> 
						<div className={'col s2 right-align'}>
							<Fab variant="extended" size="small" color="secondary" aria-label="Delete" className={classes.fab}>
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
                classes={{root: classes.padding}}
              >
                <i className={`material-icons white-text`}>home</i>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleOpenPerfil}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
              </Menu>
            </div>  
            <img className={classes.logo} src="/img/tec-logo-letras.png"/>
          </div>
        </div>
      </nav>
      <PerfilColaboradores  open={open} handleClose={handleClosePerfil} />
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = () => ({
  navContainer: {
    background:' linear-gradient(80.19deg, #101010 0%, #223f93 100%)',
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

	becarioStyle: {
		letterSpacing: '3px',
		fontSize: '14px',
	},
	
	addIcon:{
		fontSize: '18px',
		marginRight: '5px',
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