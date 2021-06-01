import React from 'react'
import NavBar from './NavBar'
import Cajon from './Cajon'
import Cajita  from './Cajita'
import Formulario from './Formulario'

import{
    Hidden,
    makeStyles
} from '@material-ui/core'

const estilos = makeStyles(theme =>({

    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
}))

const Contenedor = () => {

    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir =() => {
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <NavBar accionAbrir={accionAbrir}/>
            <Hidden xsDown>  
                <Cajon  
                    variant="permanent"
                    open={true} //nuestro cajon de xsdown
                />
            </Hidden>
            <Hidden smUp>  
                <Cajon  
                    variant="temporary"
                    open={abrir} //nuestro cajon de xsdown
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className={classes.content}>
            <div className={classes.toolbar}> </div>
            
            <Formulario/>
            <Cajita/>
    
            </div>
        </div>
    )
}

export default Contenedor
