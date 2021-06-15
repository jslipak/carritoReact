import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Pages/Home"
import Header from "../components/Header";
import Products from "../Pages/Products"

const Routes = ({handlerSearch, search}) => {
  return (
  <Router>
      <Header handlerSearch={handlerSearch}/> 
        <Switch>
            {/*Ordenar de lo mas especifico a lo mas global.  */}
            <Route path="/" exact component={Home}/>
            <Route path="/products">
              <Products  search={search}/>
            </Route>
            
        </Switch>
  </Router>
  )
};
export default Routes;
