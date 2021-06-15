import React from 'react';
import './assets/css/App.css';
import {makeStyles , ThemeProvider} from '@material-ui/styles';
import theme from './temaConfig';
import Contenedor from './components/Contenedor.jsx';

const useStyles = makeStyles({
    miBotonPersonalizado: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
 
});

function App() {

const classes = useStyles()

  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
        
          <Contenedor/>
        
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
