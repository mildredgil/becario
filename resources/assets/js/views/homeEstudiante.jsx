import React from 'react';
import ReactDOM from 'react-dom';
import CardColaborador from './cardColaborador';
import ItemPeriodo from './itemPeriodo';
import ReglamentoModal from './reglamentoModal';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';

const Home = ({classes}) => {
    
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="container">
        <div className={`row ${classes.marginTop40}`}>
          <div className={`col s12 blue-tec mb-2 ${classes.titleHistory}`}>
          Historial | Agosto-Diciembre 2019
          </div>
          <div className="col s4">
            <div className={`row mb-0 ${classes.paddingRight20}`}>
              <div className="col s12 card my-0">
                <ItemPeriodo/>
                <ItemPeriodo/>
                <ItemPeriodo/>
                <ItemPeriodo/>
                <ItemPeriodo/>  
              </div>
            </div>
          </div>
          <div className="col s8">
            <div className="row mb-0">
              <CardColaborador/>
            </div>
          </div>
        </div>
      </div>
      <ReglamentoModal/>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = theme => ({

  marginTop40: {
    marginTop: '25px'
  },

  paddingRight20: {
    paddingRight: '20px',
  },

  titleHistory: {
    fontSize: '30px',
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

const _Home = withStyles(styles)(Home);

if (document.getElementById('content')) {
  ReactDOM.render(<_Home/>, document.getElementById('content'));
}