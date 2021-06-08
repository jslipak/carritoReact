import React from 'react'
import Compras from './Compras'
import Ofertas from './Ofertas'
import Preguntas from './Preguntas'
import Formulario from './Formulario'
import Carrito from './Formulario'

//probando rutas
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, 
  } from "react-router-dom";
//Cards
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider, 
} from '@material-ui/core'



import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


const Listas = () => { //react-router-dom
    return (
        <Router>
            <div>
                <List component='nav'>

                    <NavLink to='/carrito' activeClassName="active"> 
                    <ListItem button>
                        <ListItemIcon>
                            <AddShoppingCartIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Carrito'/>
                    </ListItem>
                    </NavLink>

                    <NavLink to='/compras' activeClassName="active"> 
                    <ListItem button>   
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Compras'/>
                    </ListItem>
                    </NavLink>

                    <NavLink to='/preguntas' activeClassName="active"> 
                    <ListItem button>
                        <ListItemIcon>
                        <ContactSupportIcon/>

                        </ListItemIcon>
                        <ListItemText primary='Preguntas'/>
                    </ListItem>
                    </NavLink>

                    <NavLink to='/formulario' activeClassName="active"> 
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Mis datos'/>
                    </ListItem>
                    </NavLink>
                    
                    <NavLink to='/ofertas' activeClassName="active"> 
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Alerta de ofertas'/>
                    </ListItem>
                    </NavLink>

                    <Divider/>    

                    <Switch>
                                {/*Ordenar de lo mas especifico a lo mas global.  */}
                            <Route path="/carrito">
                                <Carrito/>
                            </Route>
                            <Route path="/compras">
                                <Compras/>
                            </Route>
                            <Route path="/preguntas">
                                <Preguntas/>
                            </Route>
                            <Route path="/formulario">
                                <Formulario/>
                            </Route>
                            <Route path="/ofertas">
                                <Ofertas/>
                            </Route>
                            <Route path="/" exact>  
                                Esta es la pagina de raiz
                            </Route>
                    </Switch>

                </List>
            </div>
            

        </Router>
    )
}

export default Listas
