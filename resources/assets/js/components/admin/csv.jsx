import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'; 
import {  DescriptionIcon, DeleteIcon } from '../../icons';

const CSV = ({ classes }) => {
  const changeFile = (e, name) => {
    let csvFile = e.target.files[0];
    console.log(csvFile);
    let data = new FormData();
      data.append('file', csvFile);
      data.append('name', name);
      
      axios({
        method: 'post',
        url: '/csv/file',
        data: data,
        dataType: "JSON",
        processData: false,
        contentType: false
      })
      .then(function (response) {
        console.log(response);
        alert("Archivo Guardado Exitosamente: " + name);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const deleteTable = (name) => {
    axios.post("/delete/period", {
      table: name,
    })
    .then(function (response) {
      console.log(response);
      alert("Tabla borrada Exitosamente: " + name);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className={classes.wrapper}>      
      <div className={`row valign-wrapper my-3`}>
        <div className="col s8 left-align">
            <span className={classes.labelLogin}>Tabla colaboradores</span>
        </div>
        <div className="col s2 right-align">
          <Button
            fullWidth
            variant="contained"
            component="label"
            variant="contained"
            color="primary"
          >
            <DescriptionIcon className={`white-text ${classes.labelSearch}`}/>
            <span className={classes.labelUpload}>Subir</span>
            <input
              type="file"
              accept=".csv"
              name="selected_file"
              className={classes.input}
              style={{ display: 'none' }}
              onChange={(e) => changeFile(e, 'colaborador')}
            />
          </Button>
        </div> 
        <div className="col s2 right-align">
          <Button
            fullWidth
            variant="contained"
            component="label"
            variant="contained"
            color="primary"
            onClick={() => deleteTable('colaboradores')}
          >
            <DeleteIcon className={`white-text ${classes.labelSearch}`}/>
            <span className={classes.labelUpload}>Borrar</span>
          </Button>
        </div> 
      </div>   
      <div className="divider"></div>                        
      <div className="row valign-wrapper my-3">
        <div className="col s8 left-align">
            <span className={classes.labelLogin}>Tabla estudiantes Becados</span>
        </div>
        <div className="col s2 right-align">
        <Button
          fullWidth
          variant="contained"
          component="label"
          variant="contained"
          color="primary"
        >
            <DescriptionIcon className={`white-text ${classes.labelSearch}`}/>
            <span className={classes.labelUpload}>Subir</span>
            <input
              type="file"
              accept=".csv"
              name="selected_file"
              className={classes.input}
              style={{ display: 'none' }}
              onChange={(e) => changeFile(e, 'estudiantes_becados')}
            />
          </Button>
        </div>
        <div className="col s2 right-align">
          <Button
            fullWidth
            variant="contained"
            component="label"
            variant="contained"
            color="primary"
            onClick={() => deleteTable('estudiantes')}
          >
            <DeleteIcon className={`white-text ${classes.labelSearch}`}/>
            <span className={classes.labelUpload}>Borrar</span>
          </Button>
        </div> 
      </div>
      <div className="divider"></div>
      <div className="row valign-wrapper my-3">
        <div className="col s8 left-align">
            <span className={classes.labelLogin}>Tabla estudiantes Inscritos</span>
        </div>
        <div className="col s2 right-align">
          <Button
            fullWidth
            variant="contained"
            component="label"
            variant="contained"
            color="primary"
          >
            <DescriptionIcon className={`white-text ${classes.labelSearch}`}/>
            <span className={classes.labelUpload}>Subir</span>
            <input
              type="file"
              accept=".csv"
              name="selected_file"
              className={classes.input}
              style={{ display: 'none' }}
              onChange={(e) => changeFile(e, 'estudiantes_inscritos')}
            />
          </Button>
        </div>
        <div className="col s2 right-align">
          <Button
            fullWidth
            variant="contained"
            component="label"
            variant="contained"
            color="primary"
            onClick={() => deleteTable('estudiantes')}
          >
            <DeleteIcon className={`white-text ${classes.labelSearch}`}/>
            <span className={classes.labelUpload}>Borrar</span>
          </Button>
        </div> 
      </div>
      <div className="divider"></div>
      <div className="row valign-wrapper my-3">
        <div className="col s8 left-align">
            <span className={classes.labelLogin}>Tabla carreras</span>
        </div>
        <div className="col s2 right-align">
        <Button
          fullWidth
          variant="contained"
          component="label"
          variant="contained"
          color="primary"
        >
          <DescriptionIcon className={`white-text ${classes.labelSearch}`}/>
          <span className={classes.labelUpload}>Subir</span>
          <input
            type="file"
            accept=".csv"
            name="selected_file"
            className={classes.input}
            style={{ display: 'none' }}
            onChange={(e) => changeFile(e, 'carreras')}
          />
        </Button>
        </div>
        <div className="col s2 right-align">
          <Button
            fullWidth
            variant="contained"
            component="label"
            variant="contained"
            color="primary"
            onClick={() => deleteTable('carreras')}
          >
            <DeleteIcon className={`white-text ${classes.labelSearch}`}/>
            <span className={classes.labelUpload}>Borrar</span>
          </Button>
        </div> 
      </div>
      <div className="divider"></div>
      <div className="row valign-wrapper my-3">
        <div className="col s8 left-align">
            <span className={classes.labelLogin}>Tabla asignaciones específicas</span>
        </div>
        <div className="col s2 right-align">
          <Button
            fullWidth
            variant="contained"
            component="label"
            variant="contained"
            color="primary"
            >
              <DescriptionIcon className={`white-text ${classes.labelSearch}`}/>
              <span className={classes.labelUpload}>Subir</span>
              <input
                type="file"
                accept=".csv"
                name="selected_file"
                className={classes.input}
                style={{ display: 'none' }}
                onChange={(e) => changeFile(e, 'especificas')}
              />
          </Button>
        </div>
        <div className="col s2 right-align">
          <Button
            fullWidth
            variant="contained"
            component="label"
            variant="contained"
            color="primary"
            onClick={() => deleteTable('asignaciones')}
          >
            <DeleteIcon className={`white-text ${classes.labelSearch}`}/>
            <span className={classes.labelUpload}>Borrar</span>
          </Button>
        </div> 
      </div>
      <div className="row valign-wrapper my-3">
        <div className="col s12 right-align">
          <label className={classes.labelLittle}>Nota: Los archivos deben ser tipo ".csv".</label>
        </div> 
      </div>
      {/*<div className="row valign-wrapper my-3">
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
      </div>*/}
    </div> 
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

    wrapper: {
      padding: '15px 50px'
    },   

    [`@media (max-width: ${maxWidth}px)`]: {

    }
});

export default withStyles(styles)(CSV);