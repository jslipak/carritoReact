import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../components/Header";
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

const Routes = ({ handlerSearch, search }) => {

  const [abrir, setAbrir] = React.useState(false)

  const accionAbrir =() => {
    setAbrir(!abrir)
}


  return (
    <Router>

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

      <Header handlerSearch={handlerSearch} />
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
    </Router>
  );
};
export default Routes;
