import React from 'react'


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

                <NavLink to='/products' activeClassName="active"> 
                    <ListItem button>
                        <ListItemIcon>
                            <AddShoppingCartIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Products'/>
                    </ListItem>
                    </NavLink>

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

                    <NavLink to='/MisDatos' activeClassName="active"> 
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

                </List>
            </div>
            

        </Router>
    )
}

export default Listas
