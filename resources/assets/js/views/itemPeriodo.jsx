import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {RightArrowIcon} from './icons';

const ItemPeriodo = ({classes}) => {
  
  return (
    <div className={`row valign-wrapper py-2 mb-0`}>
      <div className="col s10 center-align">
        <label className={`${classes.periodo} blue-tec`}>Verano 2019</label>
        <br/>
        <label className={classes.colab}>Lorena Gómez</label>
      </div>
      <div className="col s2">
        <RightArrowIcon className={classes.icon} />
      </div>
    </div>
  );
}

const maxWidth = 1000;

const styles = theme => ({
  icon:  {
    color:"#1467ff",
    fontSize: '17px',
    marginRight: '0.5rem'
  },

  periodo: {
    fontSize: '25px',
    fontWeight: 'bold'
  },

  colab: {
    fontSize: '16px'
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(ItemPeriodo);