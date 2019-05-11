import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';
import CardEstudiante from './cardEstudiante';

const homeColaboradores = ({ classes }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<MuiThemeProvider theme={defaultTheme}>
			<CardEstudiante/>
			<Button onClick={handleOpen}>Open Modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				classes={{ root: classes.modalRoot }}
			>
				<div className={`container ${classes.containerWidth}`}>
					<div className="card px-5 py-3">
						<div className="row margin-0">
							<div className={`col s12`}>
								<label className={`${classes.title} blue-tec`}>Información personal</label>
							</div>
							<div className="col s6 mb-0 mt-4">
								<label>Nombre:</label>
							</div>
							<div className="col s6 mb-0 mt-4">
								<label>Departamento:</label>
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
									defaultValue="Ciencias Computacionales"
									InputProps={{
										readOnly: true,
										disabled: true,
									}}
									variant="outlined"
								/>
							</div>
							<div className="col s6 mb-0 mt-4">
								<label>Oficina:</label>
							</div>
							<div className="col s6 mb-0 mt-4">
								<label >Correo Electrónico:</label>
							</div>
							<div className="col s6">
								<TextField
									fullWidth
									id="outlined-bare"
									classes={{ root: classes.labelText }}
									defaultValue="Cetec torre sur 301"
									variant="outlined"
								/>
							</div>
							<div className="col s6">
								<TextField
									fullWidth
									id="outlined-bare"
									classes={{ root: classes.labelText }}
									defaultValue="lorena.gomez@tec.mx"
									InputProps={{
										readOnly: true,
										disabled: true,
									}}
									variant="outlined"
								/>
							</div>
							<div className="col s6 mb-0 mt-4">
								<label>Teléfono:</label>
							</div>
						</div>
						<div className="row no-margin">
							<div className="col s6">
								<TextField
									fullWidth
									id="outlined-bare"
									classes={{ root: classes.labelText }}
									defaultValue="52818181818"
									variant="outlined"
								/>
							</div>
						</div>
						<div className="row center-align">
							<div className="col s12 mb-0 mt-4">
								<Button
									variant="contained"
									color="primary"
									href="/homeColaborador">
									Guardar
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
	},

	labelText: {
		paddingBottom: '0px!Important',
		marginTop: '0px!Important',
		marginBottom: '0px!Important',
		borderBottom: '0px!Important',
		fontSize: '14px!Important',
		color: '#000',
	},

	containerWidth: {
		maxWidth: '40%',
	},

	[`@media (max-width: ${maxWidth}px)`]: {

	}
});

const _homeColaboradores = withStyles(styles)(homeColaboradores);

if (document.getElementById('homeColaborador')) {
	ReactDOM.render(<_homeColaboradores />, document.getElementById('homeColaborador'));
}