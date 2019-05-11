import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';

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
			<Button onClick={handleOpen}>Open Modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				classes={{ root: classes.modalRoot }}
			>
				<div className={`container ${classes.containerWidth}`}>
					<div className="card px-2 py-2">
						<div className="row margin-0">
							<div className={`col s12`}>
								<label className={`${classes.title} blue-tec`}>Información personal</label>
							</div>
							<div className="col s6 mb-0 mt-4">
								<label>Nombre:</label>
							</div>
							<div className="col s6">
								<label>Departamento:</label>
							</div>
							<div className="col s6">
								<TextField
									fullWidth
									id="outlined-bare"
									classes={{ marginNormal: classes.labelText }}
									defaultValue="Lorena Gomez"
									InputProps={{
										readOnly: true,
									}}
									margin="normal"
									variant="outlined"
								/>
							</div>
							<div className="col s6">
								<TextField
									fullWidth
									id="outlined-bare"
									classes={{ fullWidth: classes.labelText }}
									defaultValue="Ciencias Computacionales"
									InputProps={{
										readOnly: true,
									}}
									margin="normal"
									variant="outlined"
								/>
							</div>
							<div className="col s6">
								<label>Oficina:</label>
							</div>
							<div className="col s6">
								<label >Correo Electrónico:</label>
							</div>
							<div className="col s6">
								<TextField
									fullWidth
									id="outlined-bare"
									classes={{ root: classes.labelText }}
									defaultValue="Cetec torre sur 301"
									margin="normal"
									variant="outlined"
								/>
							</div>
							<div className="col s6">
								<TextField
									fullWidth
									id="outlined-bare"
									className={classes.labelText}
									defaultValue="lorena.gomez@tec.mx"
									InputProps={{
										readOnly: true,
									}}
									margin="normal"
									variant="outlined"
								/>
							</div>
							<div className="col s6">
								<label>Teléfono:</label>
							</div>
						</div>
						<div className="row">
							<div className="col s6">
								<TextField
									fullWidth
									id="outlined-bare"
									classes={{ root: classes.labelText }}
									defaultValue="52818181818"
									margin="normal"
									variant="outlined"
								/>
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
		marginLeft: '10px!Important',
		marginRight: '10px!Important',
		paddingBottom: '0px!Important',
		marginTop: '0px!Important',
		marginBottom: '0px!Important',
		borderBottom: '0px!Important',
		fontSize: '14px!Important',
		color: '#000',
	},

	containerWidth: {
		maxWidth: 450,
	},

	[`@media (max-width: ${maxWidth}px)`]: {

	}
});

const _homeColaboradores = withStyles(styles)(homeColaboradores);

if (document.getElementById('homeColaborador')) {
	ReactDOM.render(<_homeColaboradores />, document.getElementById('homeColaborador'));
}