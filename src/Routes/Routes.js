import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products/Products";
import Compras from "../Pages/Compras/Compras";
import Ofertas from "../Pages/Ofertas/Ofertas";
import Preguntas from "../Pages/Preguntas/Preguntas";
import MisDatos from "../Pages/MisDatos/MisDatos";
import Carrito from "../Pages/Carrito/Carrito";
import NotFound from "../Pages/NotFound/NotFound";
import ItemDetailCard from "../components/ItemDetailCard"
import{ Hidden} from '@material-ui/core'
import Box from './../components/Box'
import{ makeStyles} from '@material-ui/core';
import NavBar from './../components/NavBar'

const useStyles = makeStyles( theme =>({
  root: {
    display: 'flex',
    minWidth: 100,
    
  },
  toolbar: theme.mixins.toolbar,
  content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
    size: {
        width: 100,
    },
}));

const Routes = ({ handlerSearch, search }) => {

  const [abrir, setAbrir] = React.useState(false)

  const classes = useStyles()

  const accionAbrir =() => {
    setAbrir(!abrir)
}
  return (
    <Router>
      <div className={classes.root}>
      <NavBar handlerSearch={handlerSearch} accionAbrir={accionAbrir}  />
      <Hidden xsDown>  
            <Box  
                variant="permanent"
                open={true} //nuestro cajon de xsdown
            />
      </Hidden>
      <Hidden smUp>  
            <Box  
                variant="temporary"
                open={abrir} //nuestro cajon de xsdown
                onClose={accionAbrir}
            />
      </Hidden>
  

 

      </div>
        <div className={classes.content}>
        <div className={classes.toolbar}> </div>

      <Switch>

        {/*Ordenar de lo mas especifico a lo mas global.  */}
        <Route path="/products/">
          <Products  search={search}/>
        </Route>
        <Route path="/carrito" component={Carrito}/>
        <Route path="/compras" component={Compras}/>
        <Route path="/preguntas" component={Preguntas}/>
        <Route path="/MisDatos" component={MisDatos}/>
        <Route path="/ofertas" component={Ofertas}/>
        <Route path="/ItemDetailCard/:id/:title" >
          <ItemDetailCard/>
        </Route>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
        
      </Switch>
      </div>
    </Router>
  );
};
export default Routes;
