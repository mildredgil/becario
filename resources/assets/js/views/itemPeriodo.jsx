import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {RightArrowIcon, PersonIcon} from './icons';

const ItemPeriodo = ({classes}) => {
  const [selected, setSelected]  = React.useState(false);

  const onSelect = () => {
    setSelected(true);
  };

  return (
    <div onClick={onSelect} className={`${selected ? classes.selected :classes.itemWrapper} row valign-wrapper py-2 px-2 mb-0`}>
      <div className="col s10">
        <label className={`${classes.periodo} blue-tec`}>Verano 2019</label>
        <br/>
        <label className={`${classes.colab} blue-tec-dark`}>
          <PersonIcon className={classes.iconLabel}/>
          Lorena Gómez | Evaluación: Pendiente
        </label>
      </div>
      <div className={`col s2`}>
        <RightArrowIcon className={`hide ${classes.icon} ${selected ? classes.itemIcon : ''} `} />
      </div>
    </div>
  );
}

const maxWidth = 1000;

const styles = theme => ({
  itemWrapper: {
    borderBottom: '1px solid rgba(34,  63, 147, 0.2)',
    '&:hover': {
      background: "#223f9320",
    },
  },
  
  selected: {
    background: "#223f9320"
  },

  iconLocation: {
    fontSize: '12px'
  },
  
  itemIcon: {
    display: "inline-block !important",
  },

  icon:  {
    color:"#223f93",
    fontSize: '17px',
    marginRight: '0.5rem'
  },

  iconLabel:  {
    color:"#223f93",
    fontSize: '12px',
    marginRight: '0.5rem'
  },

  periodo: {
    fontSize: '20px',
    fontWeight: 'bold'
  },

  colab: {
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center'
  },

  [`@media (max-width: ${maxWidth}px)`]: {
   
  }
});

export default withStyles(styles)(ItemPeriodo);