import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import * as FaIcons from "react-icons/fa";
import theme from '../temaConfig';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/Icon';
import {Button} from '@material-ui/core'; //Componente de material UI 

const drawerWidth = 240;


//
const useStyles = makeStyles(theme  => ({
    menuButton: {
        marginRight: theme.spacing(2), //Marguen para que no quede pegado el icon. Mutiplicado por 8px
        [theme.breakpoints.up('sm')]: {
            display: 'none',
          }
      },
      title:{
          flexGrow: 1, //flexbox, 
      },
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
}));

function NavBar(props){
    const classes = useStyles()
    return(
 

            <AppBar className={classes.appBar}>
                <Toolbar>
                <IconButton 
                color="secondary" 
                aria-label="menu" 
                className={classes.menuButton} 
                onClick={() => props.accionAbrir()}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                        Mi Sitio Web
                </Typography>
                <Button variant="text" color="inherit">
                    Login
                </Button>    
                </Toolbar>
            </AppBar>

     
    )
}
export default NavBar;