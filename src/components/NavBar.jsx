import { AppBar, Toolbar, Typography, makeStyles, Form} from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/Icon';
import {Button} from '@material-ui/core'; //Componente de material UI 
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

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
      root: {
        '& > *': {
          margin: theme.spacing(2),
          width: '25ch',
        },
      },
      rootMargin: {
        '& .MuiTextField-root': {
          marginRight: theme.spacing(10),
          marginBottom: theme.spacing(2),
          width: 200,
        },
      },
      searchIcon: {
        marginRight: theme.spacing(2)
    }
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
                        MI SITIO WEB
                </Typography>
                    <SearchIcon className={classes.searchIcon}/>
                    <form className={classes.rootMargin} noValidate autoComplete="on">
                        <TextField id="standard-basic" label="Que estás buscando?"  />
                    </form>
               
                <IconButton aria-label="addCar">
                <AddShoppingCartIcon/>      
                </IconButton>
                 
                </Toolbar>


            </AppBar>

     
    )
}
export default NavBar;

