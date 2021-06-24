import React, {useState} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ItemDetailCard from './ItemDetailCard'

const useStyles = makeStyles({

    contador:{
      marginTop: 20,
    },
    btnAddToCar: {
        marginBottom: 20
    }
  
  });


const useContador = () => {


    const [clicks, setClicks] = useState(1)
    const stock = 9

    const aumentarContador = () =>{
        if (clicks <= stock) {
            setClicks(clicks + 1)
        }
        else{
            Button.disabled = false
            alert("Ups! Tenemos solo 10 de estos productos en stock")
        }
    }

    const restarContador = () =>{
        if (clicks > 1) setClicks(clicks -1)
    }
    return {clicks, aumentarContador, restarContador}
}



const Contador = () =>  {

    const classes = useStyles();

    const {clicks, aumentarContador, restarContador} = useContador(0)

    return (
        <>
        <Grid className={classes.contador}>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button onClick={aumentarContador}> + </Button>
                <Button onClick={restarContador}> - </Button>
            </ButtonGroup>
            <p>{`Candtidad ${clicks}` }  </p>

        </Grid>
            
        <div>
            
            <Button variant="contained" color="primary" className={classes.btnAddToCar}>
            Agregar al carrito</Button>
            <Typography/>
            <Button variant="contained" color="primary"> Terminar Compra</Button>
            
        </div>
        </>
    )
}


export default Contador
