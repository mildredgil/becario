import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import {PersonIcon, PersonEditIcon, CloseIcon, CheckIcon } from './icons';

const EvaluacionModal = ({ classes, open, handleClose }) => {


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
                                <PersonEditIcon className={classes.iconEditLabel} />
                                <label className={`${classes.title} blue-tec`}>Becarios</label>
                            </div>
                        </div>
                        <div className="row margin-0">
                            <div className={`col s3 offset-s6 valing-wrapper`}>
                                <label className={`center-align ${classes.labelText}`}>Satisfactorio</label>
                            </div>
                            <div className={`col s3 valing-wrapper`}>
                                <label className={`center-align ${classes.labelText}`}>Insatisfactorio</label>
                            </div>
                        </div>
                        <div className="row margin-0">
                            <div className="col s6 mt-4" >
                                <PersonIcon className={classes.iconLabel} />
                                <label className={classes.labelText}>Sergio De La Rosa Munguía</label>
                            </div>
                            <div className="col s3 mt-4 valign-wrapper">
                                <Fab size="small" className={`center-align ${classes.botonVerde}`}>
                                     <CheckIcon className={classes.iconLabel} />
                                </Fab>
                            </div>
                            <div className="col s3 mt-4 valign-wrapper">
                                <Fab size="small" className={`center-align ${classes.botonRojo}`}>
                                    <CloseIcon className={`white-text ${classes.iconLabel}`} />
                                </Fab>
                            </div>
                        </div>
                        <div className="row margin-0">
                            <div className="col s16 mb-2 mt-1 valign-wrapper">
                                <label>A00225910</label>
                            </div>
                        </div>
                        <div className="row margin-0">
                            <div className="col s6 mt-4" >
                                <PersonIcon className={classes.iconLabel} />
                                <label className={classes.labelText}>Diana Guadalupe Sanchez Burgos</label>
                            </div>
                            <div className="col s3 mt-4 valign-wrapper">
                                <Fab size="small" className={`center-align ${classes.botonVerde}`}>
                                     <CheckIcon className={classes.iconLabel} />
                                </Fab>
                            </div>
                            <div className="col s3 mt-4 valign-wrapper">
                                <Fab size="small" className={`center-align ${classes.botonRojo}`}>
                                    <CloseIcon className={`white-text ${classes.iconLabel}`} />
                                </Fab>
                            </div>
                        </div>
                        <div className="row margin-0">
                            <div className="col s16 mb-2 mt-1 valign-wrapper">
                                <label>A00226239</label>
                            </div>
                        </div>
                        <div className="row margin-0">
                            <div className="col s6 mt-4" >
                                <PersonIcon className={classes.iconLabel} />
                                <label className={classes.labelText}>Jaime Andrés Montemayor Molina</label>
                            </div>
                            <div className="col s3 mt-4 valign-wrapper">
                                <Fab size="small" className={`center-align ${classes.botonVerde}`}>
                                    <CheckIcon className={classes.iconLabel} />
                                </Fab>
                            </div>
                            <div className="col s3 mt-4 valign-wrapper">
                                <Fab size="small" className={`center-align ${classes.botonRojo}`}>
                                    <CloseIcon className={`white-text ${classes.iconLabel}`} />
                                </Fab>
                            </div>
                        </div>
                        <div className="row margin-0">
                            <div className="col s16 mb-2 mt-1 valign-wrapper">
                                <label>A01138755</label>
                            </div>
                        </div>
                        <div className="row center-align">
                            <div className="col s12 mb-2 mt-4">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="/homeEstudiante">
                                    <CheckIcon className={`white-text ${classes.labelCheck}`}/>
                                    <span className={classes.labelLogin}>Guardar</span>
                                </Button>
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

    botonVerde:{
        backgroundColor: '#76ff03',
    },

    botonRojo:{
        backgroundColor: '#d50000',
    },

    icon: {
        fontSize: '17px',
        marginRight: '0.5rem'
    },

    labelText: {
        fontSize: '16px',
        color: '#000',
        //marginLeft: '0.5rem'
    },

    iconLabel: {
        color: "#101010",
        fontSize: '15px',
        //marginRight: '0.5rem'
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
        maxWidth: '50%',
    },

    labelCheck: {
        fontSize: '16px',
        marginRight: '0.5rem',
    },

    labelLogin:{
        fontFamily : 'Nunito',
        fontSize: '20px', 
    },

    [`@media (max-width: ${maxWidth}px)`]: {

    }
});

export default withStyles(styles)(EvaluacionModal);
