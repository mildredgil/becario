import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import defaultTheme from '../theme';

const Footer = ({ classes }) => {

  return (
    <MuiThemeProvider theme={defaultTheme}>
      
      <div className={`${classes.textWrapper} row mb-0`}>
        <div className="col s12 center-align">
          <span>© 2019 Tecnológico de Monterey | Aviso de privacidad</span>
        </div>
      </div>
      <div className={classes.wrapper}></div>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = () => ({
  textWrapper: {
    position: 'relative',
    //paddingTop: '50vh',
    top: '70px',
    //left: '100p',
    fontWeight: 'bold',
    fontSize: '20px',
  },

  wrapper: {
    backgroundImage: 'url(http://localhost:8000/img/teccampus.jpg)',
    //position: 'relative',
    //paddingTop: '50vh',
    height: '120px',
    opacity: '0.5',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(3px)'
  },

  [`@media (max-width: ${maxWidth}px)`]: {

  }
});

const _Footer = withStyles(styles)(Footer);

if (document.getElementById('footer')) {
  ReactDOM.render(<_Footer />, document.getElementById('footer'));
}