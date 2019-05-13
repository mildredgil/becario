import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import Button from '@material-ui/core/Button';
import ModalLoginColaborador from './modalLoginColaborador';
import ModalLoginEstudiante from './modalLoginEstudiante';

const LoginButton = ({ classes }) => {
  const [hoverC, isHoverC] = React.useState(false);
  const [hoverE, isHoverE] = React.useState(false);
  const [openC, setOpenC] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);

  const hoverOnC = () => {
    isHoverC(true);
  };

  const hoverOffC = () => {
    isHoverC(false);
  };

  const hoverOnE = () => {
    isHoverE(true);
  };

  const hoverOffE = () => {
    isHoverE(false);
  };

  const handleOpenModalC = () => {
    setOpenC(true);
  };

  const handleCloseModalC = () => {
    setOpenC(false);
  };

  const handleOpenModalE = () => {
    setOpenE(true);
  };

  const handleCloseModalE = () => {
    setOpenE(false);
  };

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div style={{width: '100%', margin: 'auto', height:'100vh',}} className="row">
        <div className="col s6 center-align px-0" style={{height:'100vh',}}>
          <div id="student" style={{height:'100vh',}} className={classes.userWrapper} onClick={handleOpenModalE} onMouseLeave={hoverOffE} onMouseEnter={hoverOnE}>
            <div style={{width: '100%',}}className="center-align">
              <label className={`${hoverE ? classes.userHover : ''} ${classes.user} ${classes.userStudent}`}>Alumno</label>
              <svg className={`${hoverE ? classes.userHover : ''} img-svg`} width="60" height="60" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
            </div>
          </div>
        </div>
        <div className="col s6 center-align px-0" style={{height:'100vh',}}>
          <div id="collaborator" style={{height:'100vh',}} className={classes.userWrapper} onClick={handleOpenModalC} onMouseLeave={hoverOffC} onMouseEnter={hoverOnC}>
            <div style={{width: '100%',}} className="center-align">
              <label className={`${hoverC ? classes.userHover : ''} ${classes.user} ${classes.userProfessor}`} >Colaborador</label>
              <svg className={`${hoverC ? classes.userHover : ''} img-svg`} width="60" height="60" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <ModalLoginColaborador open={openC} handleClose={handleCloseModalC} />
      <ModalLoginEstudiante open={openE} handleClose={handleCloseModalE} />
    </MuiThemeProvider>
  )
}

const maxWidth = 1000;

const styles = theme => ({
  colorFocused: {
    borderColor: "#223f93"
  },

  modalWrapper: {
    padding: "25px !Important"
  },

  labelHeader: {
    fontSize: '18px',
    color: "#000",
    textAlign: 'center',
  },

  labelText: {
    fontSize: '14px',
    color: "#000",
  },
  closeIcon: {
    color: 'black',
    position: 'absolute',
    right: '10px',
    top: '12px',
    fontSize: '18px',
  },

  noMargin: {
    margin: '0px',
  },
  user: {
    display: 'block',
    fontSize: '50px',
    color: "#fff",
  },
  userStudent: {
    '&:hover': {
      cursor: 'pointer',
      fontSize: '70px',
      color: "#223f93",
    },
  },
  userProfessor: {
    '&:hover': {
      cursor: 'pointer',
      fontSize: '70px',
      color: "#223f93",
    },
  },
  userHover: {
    cursor: 'pointer',
    fontSize: '70px',
    color: "#223f93",
    fill:"#fff",
  },
  userWrapper: {
    height: '550px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#ffffe14",
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: "#fdfffa9c",
    },
  },

  [`@media (max-width: ${maxWidth}px)`]:{
   
  }
});

const _Login = withStyles(styles)(LoginButton);

if (document.getElementById('content')){
  ReactDOM.render(<_Login />, document.getElementById('content'));
}