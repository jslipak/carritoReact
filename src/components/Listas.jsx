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

const Listas = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>   
                    <ListItemIcon>
                    <AccountCircleIcon/>

                    
                    </ListItemIcon>
                    <ListItemText primary='Tu cuenta'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <AddAlertIcon/>

                    </ListItemIcon>
                    <ListItemText primary='Notificaciones'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <EcoIcon/>

                    </ListItemIcon>
                    <ListItemText primary='Eco'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <AddShoppingCartIcon/>

                    </ListItemIcon>
                    <ListItemText primary='Carrito'/>
                </ListItem>

                <Divider/>

                
            </List>
        </div>
    )
}

export default Listas
