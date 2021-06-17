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
import ItemDetailCard from "../Pages/ItemDetailCard/ItemDetailCard"
const Routes = ({ handlerSearch, search }) => {
  return (
    <Router>
      <Header handlerSearch={handlerSearch} />
      <Switch>
        {/*Ordenar de lo mas especifico a lo mas global.  */}
        <Route path="/products">
          <Products  search={search}/>
        </Route>
        <Route path="/carrito" component={Carrito}/>
        <Route path="/compras" component={Compras}/>
        <Route path="/preguntas" component={Preguntas}/>
        <Route path="/MisDatos" component={MisDatos}/>
        <Route path="/ofertas" component={Ofertas}/>
        <Route path="/ItemDetailCard" >
            <ItemDetailCard search={search}/>
        </Route>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
export default Routes;
