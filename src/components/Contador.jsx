import React, {useState} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useContador = () => {

    const [clicks, setClicks] = useState(0)

    const aumentarContador = () =>{
        setClicks(clicks + 1)
        if(clicks >= 5) {
            
        }
         
    }

    const restarContador = () =>{
        if (clicks > 0) setClicks(clicks -1)
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
