import React, {useState} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

    const {clicks, aumentarContador, restarContador} = useContador(0)

    return (
        <>
        <Grid>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button onClick={aumentarContador}> + </Button>
                <Button onClick={restarContador}> - </Button>
            </ButtonGroup>
            <p>{`Candtidad ${clicks}`}</p>
        </Grid>
        <div>
            <Button> Agregar al carrito</Button>
            
        </div>
        <small> {new Date().toLocaleString()}</small>
        </>
    )
}


export default Contador
