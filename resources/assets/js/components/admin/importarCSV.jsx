import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import defaultTheme from '../../theme';
import { SchoolIcon, EmailIcon, DescriptionIcon, UpLoadIcon, PersonIcon, InfoIcon, PersonEditIcon, CloseIcon, CheckIcon, SearchIcon } from '../../icons';

const ImportarCSV = ({ classes, open, handleClose }) => {
    const [ifSearchTrue, setIfSearchTrue] = React.useState(true);
    const searchClick = (event) => {
        setIfSearchTrue(false);
    }

    React.useEffect(()=> {
        if(open == false){
            setIfSearchTrue(true);  
        }
      }, [open]);
    
    
    return (
        <MuiThemeProvider theme={defaultTheme}>
            <Modal
                open={open}
                onClose={handleClose}
                classes={{ root: classes.modalRoot }}
            >
                <div className={`container ${classes.containerWidth}`}>
                    <div className="card px-5 py-3">
                        <CloseIcon onClick={handleClose} className= {classes.closeIcon}/>
                        <div className="row margin-0">
                            <div className={`col s12 valign-wrapper`}>
                                <UpLoadIcon className={classes.iconEditLabel} />
                                <label className={`${classes.title} blue-tec`}>Importar</label>
                            </div>
                        </div>
                            <div className={`row valign-wrapper`}>
                                <div className="col s6 left-align">
                                    <span className={classes.labelLogin}>Tabla colaboradores</span>
                                </div>
                                <div className="col s6 center-align">
                                    <Button
                                        onClick={searchClick}
                                        variant="contained"
                                        color="primary">
                                        <DescriptionIcon className={`white-text ${classes.labelSearch}`}/>
                                        <span className={classes.labelUpload}>Subir archivo</span>
                                    </Button>
                                </div> 
                            </div>                           
                            <div className="row valign-wrapper">
                                <div className="col s6 left-align">
                                    <span className={classes.labelLogin}>Tabla estudiantes</span>
                                </div>
                                <div className="col s6 center-align">
                                <Button
                                    variant="contained"
                                    color="primary">
                                    <DescriptionIcon className={`white-text ${classes.labelSearch}`}/>
                                    <span className={classes.labelUpload}>Subir archivo</span>
                                </Button>
                                </div>
                            </div>
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                <label className={classes.labelLittle}>Nota: Los archivos deben ser tipo ".csv".</label>
                                </div> 
                            </div>
                            <div className="row valign-wrapper">
                                <div className="col s12 mb-2 mt-4">
                                    <div className="col s12 center-align">
                                    <Button
                                        variant="contained"
                                        color="primary">
                                        <CheckIcon className={`white-text ${classes.labelCheck}`}/>
                                        <span className={classes.labelLogin}>Generar asignación automática</span>
                                    </Button>
                                    </div>
                                </div>
                            </div>
                    </div> 
                </div>
            </Modal>
        </MuiThemeProvider>
    );
}

const maxWidth = 1000;

const styles = theme => ({

    modalWrapper: {
        padding: "25px !Important"
    },

    modalRoot: {
        top: '20%',
    },

    title: {
        fontSize: '30px',
        fontWeight: 'bold',
    },

    icon: {
        fontSize: '17px',
        marginRight: '0.5rem'
    },

    labelText: {
        fontSize: '14px',
        color: '#000',
        //marginLeft: '0.5rem'
    },

    iconLabel: {
        color: "#101010",
        fontSize: '14px',
        marginRight: '0.5rem'
    },
    iconEditLabel: {
        color: "#223f93",
        fontSize: '30px',
        marginRight: '0.5rem'
    },

    iconSchool: {
        color: "#101010",
        fontSize: '18px',
        marginRight: '0.5rem'
    },

    iconInfo: {
        color: "#101010",
        fontSize: '18px',
        marginRight: '0.5rem'
    },

    closeIcon: {
        cursor : 'pointer',
        color: 'black',
        position: 'absolute',
        right: '12px',
        top: '12px',
        fontSize: '18px',
      },

    containerWidth: {
        maxWidth: '40%',
    },

    labelSearch: {
        fontSize: '15px',
        marginRight: '0.5rem',
    },

    labelCheck: {
        fontSize: '16px',
        marginRight: '0.5rem',
    },

    labelLogin:{
        fontFamily : 'Nunito',
        fontSize: '20px', 
    },

    labelUpload: {
        fontFamily : 'Nunito',
        fontSize: '15px',
    },

    labelLittle:{
        fontFamily : 'Nunito',
        fontSize: '15px',
    },

   

    [`@media (max-width: ${maxWidth}px)`]: {

    }
});

export default withStyles(styles)(ImportarCSV);