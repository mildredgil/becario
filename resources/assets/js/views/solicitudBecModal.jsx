import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import { SchoolIcon, EmailIcon, LocationIcon, PhoneIcon, PersonIcon, InfoIcon, PersonEditIcon, CloseIcon, CheckIcon } from './icons';

const SolicitudBecaria = ({ classes, open, handleClose }) => {

    
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
                                <label className={`${classes.title} blue-tec`}>Solicitud becaria</label>
                            </div>
                            <div className="col s6 mb-2 mt-4 valign-wrapper">
                                <PersonIcon className={classes.iconLabel} />
                                <label>Nombre</label>
                            </div>
                            <div className="col s6 mb-2 mt-4 valign-wrapper">
                                <InfoIcon className={classes.iconInfo} />
                                <label>Matrícula</label>
                            </div>
                            <div className="col s6">
                                <TextField
                                    fullWidth
                                    id="outlined-bare"
                                    classes={{ root: classes.labelText }}
                                    defaultValue="Lorena Gomez"
                                    InputProps={{
                                        readOnly: true,
                                        disabled: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className="col s6">
                                <TextField
                                    fullWidth
                                    id="outlined-bare"
                                    classes={{ root: classes.labelText }}
                                    defaultValue="A01176573"
                                    InputProps={{
                                        readOnly: true,
                                        disabled: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className="col s6 mb-2 mt-4 valign-wrapper">
                                <SchoolIcon className={classes.iconSchool} />
                                <label>Carrera</label>
                            </div>
                            <div className="col s6 mb-2 mt-4 valign-wrapper">
                                <InfoIcon className={classes.iconInfo} />
                                <label >Semestre</label>
                            </div>
                            <div className="col s6">
                                <TextField
                                    fullWidth
                                    id="outlined-bare"
                                    classes={{ root: classes.labelText }}
                                    defaultValue="ITC"
                                    InputProps={{
                                        readOnly: true,
                                        disabled: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className="col s6">
                                <TextField
                                    fullWidth
                                    id="outlined-bare"
                                    classes={{ root: classes.labelText }}
                                    defaultValue="6°"
                                    InputProps={{
                                        readOnly: true,
                                        disabled: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className="col s6 mb-2 mt-4 valign-wrapper">
                                <EmailIcon className={classes.iconLabel} />
                                <label>Correo</label>
                            </div>
                            <div className="col s6 mb-2 mt-4 valign-wrapper">
                                <PhoneIcon className={classes.iconInfo} />
                                <label >Teléfono</label>
                            </div>
                        </div>
                        <div className="row no-margin">
                            <div className="col s6">
                                <TextField
                                    fullWidth
                                    id="outlined-bare"
                                    classes={{ root: classes.labelText }}
                                    defaultValue="a09273645@itesm.mx"
                                    InputProps={{
                                        readOnly: true,
                                        disabled: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className="col s6">
                                <TextField
                                    fullWidth
                                    id="outlined-bare"
                                    classes={{ root: classes.labelText }}
                                    defaultValue="8181818181"
                                    InputProps={{
                                        readOnly: false,
                                        disabled: false,
                                    }}
                                    variant="outlined"
                                />
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

export default withStyles(styles)(SolicitudBecaria);