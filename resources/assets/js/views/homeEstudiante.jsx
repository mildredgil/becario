import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardColaborador from './cardColaborador';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';

const Home = ({classes}) => {
    
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <div className="container">
        <div className="row">
          <div className="col s4">
            <div className="row">
            </div>
          </div>
          <div className="col s8">
            <div className={`row ${classes.marginTop40}`}>
              <CardColaborador/>
            </div>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

const maxWidth = 1000;

const styles = theme => ({

  marginTop40: {
    marginTop: '40px'
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

const _Home = withStyles(styles)(Home);

if (document.getElementById('content')) {
  ReactDOM.render(<_Home/>, document.getElementById('content'));
}