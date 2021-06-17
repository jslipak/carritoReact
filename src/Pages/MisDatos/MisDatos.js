import React from 'react'
import Formulario from  './../../components/Formulario'
import{ makeStyles} from '@material-ui/core'


const estilos = makeStyles(theme =>({
 
      mTopform: {
        marginTop: 120,
        alignItems: 'center',
        marginLeft: 300,
      }
}))


const MisDatos = () => {

    const classes = estilos()

    return (
        <div>
            <h1>Mis Datos</h1>
            <section className={classes.mTopform}>
             <Formulario/>
            </section><hr/>
        </div>
    )
}

export default MisDatos
