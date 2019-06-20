import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';

const Evaluacion = ({classes}) => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="container">
        Evaluacion
      </div>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;
const styles = theme => ({
  [`@media (max-width: ${maxWidth}px)`]: {
  }
});

const _Evaluacion = withStyles(styles)(Evaluacion);
if (document.getElementById('evaluacionEstudiante')) {
  ReactDOM.render(<_Evaluacion />, document.getElementById('evaluacionEstudiante'));
}