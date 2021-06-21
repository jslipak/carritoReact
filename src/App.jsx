import React from 'react';
import './assets/css/App.css';
import { ThemeProvider} from '@material-ui/styles';
import theme from './temaConfig';
import Routes from './Routes/Routes'; //nuevo
import {useState} from 'react'; //nuevo

const App = ()  =>{ 

  const [search, setSearch] = useState(null) //nuevo

  //Manejador "handlerSearch" que recibe el parametro de lo que busca la persona
  const handlerSearch = (product) => setSearch(product)

  return (
   
    <div className="App">
      <section className="App-section-a">
            <ThemeProvider theme={theme}>
            
                <Routes search={search} handlerSearch={handlerSearch}/>
    
            </ThemeProvider>
       
      </section> 
    </div>

  );
}

export default App;
