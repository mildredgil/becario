import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../theme';

const homeColaboradores = ({classes}) => {
  const [open, setOpen]  = React.useState(false);

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
			>
				<div className={`container ${classes.containerWidth}`}>
					<div className="card">
						<div className="row">
							<div className={`col s12`}>
								<div className="row">
									<div className="col s12">
										<label className={classes.labelHeader}>
												Perfil.
										</label>
										<br></br>
										<br></br>
										<div className="col s6">
											<div className="row">
												<label className={classes.labelText}>
													Nombre
												</label>
											</div>
											<div className="row">
												<label className={classes.labelText}>
													Departamento
												</label>
											</div>
											<div className="row">
												<label className={classes.labelText}>
													Mail
												</label>
											</div>
										</div>
										<div className="col s6">
											<div className="row">
												<label className={classes.labelText}>
													Oficina
												</label>
											</div>
											<div className="row">
												<label className={classes.labelText}>
													Telefono
												</label>
											</div>
										</div>
									</div>
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

  labelHeader: {
    fontSize: '18px',
    color: '#000',
    textAlign: 'center',
  },

  labelText: {
    fontSize: '14px',
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
  ReactDOM.render(<_homeColaboradores/>, document.getElementById('homeColaborador'));
}