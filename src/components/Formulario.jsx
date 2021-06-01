import React from 'react'
import { makeStyles , ThemeProvider} from '@material-ui/styles';

import  { 
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Button,
    Grid
    
 } from '@material-ui/core'

//Clase para btn con material UI
//css en nuestro archivo jsx...
const useStyles = makeStyles({
    miBotonPersonalizado: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '0 0px 30px',
    width: '105ch',
  },
  miInputPersonalizado:{
    color: 'white'
}
  
})

const Formulario = () => {

    const classes = useStyles()
    
    return (
        <Grid container  border={2}>
            <Grid  item xs={12} sm={6} md={4} >
            <FormControl >
             <InputLabel htmlFor="email" className= {classes.miInputPersonalizado}> Email </InputLabel>
                <Input id="email" type="email" aria-describedby="email-helper" className= {classes.miInputPersonalizado}/> 
                <FormHelperText id="email-helper" className= {classes.miInputPersonalizado}> Coloca tu email</FormHelperText>
            </FormControl>
            </Grid >
            <Grid item xs={12} sm={6} md={4}>
            <FormControl>
                 <InputLabel htmlFor="pwd" className= {classes.miInputPersonalizado} > Password </InputLabel>
                <Input id="pwd" type="password" aria-describedby="password-helper" className= {classes.miInputPersonalizado}/> 
                <FormHelperText id="password-helper" className= {classes.miInputPersonalizado}> Coloca tu password</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item md={12} item xs={12} sm={6}>
            <Button variant="contained" className= {classes.miBotonPersonalizado}>
                Iniciar sesion
            </Button>
            </Grid>
        </Grid>
    )
}

export default Formulario