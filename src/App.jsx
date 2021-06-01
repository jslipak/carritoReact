import React from 'react';
import espiral from './assets/images/espiral.svg';
import './assets/css/App.css';
import {Button} from '@material-ui/core'; //Componente de material UI 
import DeleteIcon from '@material-ui/icons/Delete';
import {Icon, IconButton, Typography} from '@material-ui/core';

import { makeStyles , ThemeProvider} from '@material-ui/styles';
import theme from './temaConfig';


//Importamos componentes 
import MiComponente  from './components/MiComponente.js';
import Contenedor from './components/Contenedor.jsx';
  
//Clase para btn con material UI
//css en nuestro archivo jsx...
const useStyles = makeStyles({
    miBotonPersonalizado: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
  
})

//JSX tiene que estar dentro de una etiqueta.
function HolaMundo (nombre, edad){
  var presentacion = 
  (
  <div>
    <h2> Soy {nombre} y este es mi nombreObjeto por funcion</h2>
    <h3> Tengo {edad}</h3>
  </div>
  );

  return presentacion
}

function App() {

//Definir las variables afuerta 
var nombre = "Santiago Cendra";
var objetoNombre = <h2>Soy {nombre} y es te es mi nombreObjeto sin funcion</h2>

const classes = useStyles()

  return (
    <div className="App">
      <header className="App-header">

      <ThemeProvider theme={theme}>
 
        <Contenedor/>
        
      </ThemeProvider>
        


        <img src={espiral} className="App-logo" alt="logo" />
        <p>
          Hola soy Santi desde app.js !! 
        </p>

        <Button className= {classes.miBotonPersonalizado}>
             Mi button personalizado
        </Button>

        {HolaMundo(nombre, 16 )}

        {objetoNombre}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Etiqueta "a" 
        </a>

      </header>

      <section className="componentes"> 
      <MiComponente /> 
      </section>

      <section className="componentes">
        <DeleteIcon
          color= "primary"
          />

         <Icon> 
          start
         </Icon>

         <Button 
         variant="contained" 
         color="secondary"
         endtIcon={<DeleteIcon/>}>
           borrar
         </Button>

         <IconButton 
         aria-label="delete" 
         >
           <DeleteIcon
          color= "primary"
          />
           
         </IconButton>

          <Typography variant="h1" color="primary">
            Typografia Material UI 
          </Typography>

          <Typography variant="body1" color="secondary" aling='center' paragraph>
            Bodi color secondary center y paragraph
          </Typography>

           <Typography variant="h1" color="primary" aling='center' >
            Typografy  paragraph
           </Typography>

         
          

      </section>
    


    </div>
  );
}

export default App;
