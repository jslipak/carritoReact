import React from 'react'


//probando rutas
import {
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
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HistoryIcon from '@material-ui/icons/History';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: '#545454',
      }
  
  });
  

const Listas = () => { //react-router-dom

    const classes = useStyles()

    return (

            <div>
                <List component='nav'>


                <NavLink to='/' activeClassName="active" className={classes.link} > 
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Home'/>
                    </ListItem>
                    </NavLink>

                <NavLink to='/products' activeClassName="active"  className={classes.link} > 
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Products'/>
                    </ListItem>
                    </NavLink>

                    <NavLink to='/carrito' activeClassName="active"  className={classes.link} > 
                    <ListItem button>
                        <ListItemIcon>
                            <AddShoppingCartIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Carrito'/>
                    </ListItem>
                    </NavLink>

                    <NavLink to='/compras' activeClassName="active"  className={classes.link} > 
                    <ListItem button>   
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Tus Compras'/>
                    </ListItem>
                    </NavLink>

                    <NavLink to='/preguntas' activeClassName="active"  className={classes.link} > 
                    <ListItem button>
                        <ListItemIcon>
                        <ContactSupportIcon/>

                        </ListItemIcon>
                        <ListItemText primary='Preguntas'/>
                    </ListItem>
                    </NavLink>

                    <NavLink to='/MisDatos' activeClassName="active"  className={classes.link} > 
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Mis datos'/>
                    </ListItem>
                    </NavLink>
                    
                    <NavLink to='/ofertas' activeClassName="active"  className={classes.link} > 
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
            

        
    )
}

export default Listas
