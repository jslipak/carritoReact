import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider, 
} from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EcoIcon from '@material-ui/icons/Eco';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


const Listas = () => {
    return (
        <div>
            <List component='nav'>


                <ListItem button>
                    <ListItemIcon>
                    <AddShoppingCartIcon/>

                    </ListItemIcon>
                    <ListItemText primary='Carrito'/>
                </ListItem>
                
                <ListItem button>   
                    <ListItemIcon>
                    <AccountCircleIcon/>

                    
                    </ListItemIcon>
                    <ListItemText primary='Compras'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <ContactSupportIcon/>

                    </ListItemIcon>
                    <ListItemText primary='Preguntas'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <AccountCircleIcon/>

                    </ListItemIcon>
                    <ListItemText primary='Mis datos'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <NotificationsIcon/>

                    </ListItemIcon>
                    <ListItemText primary='Alerta de ofertas'/>
                </ListItem>

                <Divider/>

                
            </List>
        </div>
    )
}

export default Listas
