import React from 'react';
import './assets/css/App.css';
import { ThemeProvider} from '@material-ui/styles';
import theme from './temaConfig';
import Routes from './Routes/Routes' //nuevo
import {useState} from 'react' //nuevo
import{ makeStyles} from '@material-ui/core'


const useStyles = makeStyles( theme =>({
    miBotonPersonalizado: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  root: {
    display: 'flex'
    
  },
  toolbar: theme.mixins.toolbar,
  content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    size: {
        width: 100,
    },
}));

const App = ()  =>{ 

  const [search, setSearch] = useState(null) //nuevo

  //Manejador que recibe el parametro de lo que busca la persona
  const handlerSearch = (product) => setSearch(product)

  const classes = useStyles()



  return (
    <div className="App">
      <header className="App-header">
      <div className={classes.root}>

       
        <div className={classes.content}>
        <div className={classes.toolbar}> </div>
        <div className={classes.toolbar}>

        </div>
          {/*<section>
          <CicloDeVida/>
          </section><hr/>*/}
        </div>
        </div>


        <ThemeProvider theme={theme}>
        
            <Routes search={search} handlerSearch={handlerSearch}/>
 
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
