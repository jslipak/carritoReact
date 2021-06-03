import React from 'react';
import './assets/css/App.css';
import { makeStyles , ThemeProvider} from '@material-ui/styles';
import theme from './temaConfig';
import Contenedor from './components/Contenedor.jsx';

//probando rutas
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
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


function App() {


const classes = useStyles()

  return (
    <div className="App">
      <header className="App-header">
    
      <Router>
        <ThemeProvider theme={theme}>
        
          <Contenedor/>
      
          
        </ThemeProvider>
      </Router>

      </header>
    </div>
  );
}

export default App;
