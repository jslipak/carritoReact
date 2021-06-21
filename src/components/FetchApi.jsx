import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BASE_URL} from '../constants';
import CardItem  from '../components/CardIItem'
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        paddingBottom: '100px',
        marginRight: '50px',
        marginLeft: '290px'  
      }
  
  });
  
function FetchApi() {

    const classes = useStyles();

    const [productos, setProductos] = useState([])

    const fetchData = async () => {
        
        try{
            const res = await fetch(`${BASE_URL}/sites/MLA/search?q=pelota&limit=9`)//URL aqui. 
            const datos = await res.json()
            //console.log(datos.results)
            setProductos(datos.results)
        }catch (error){
            console.log(error)
        }
    }
  
    useEffect(() => {
        console.log('useEffect')
        fetchData()
    },[3000])


    return (

        <div className={classes.container}> 
         <Grid container spacing={8} >
         
          {productos.map( (props, index)=> (
              <>
              <CardItem 
              key={index}
              id={props.id} 
              name={props.title}
              description={props.price}
              img={props.thumbnail}
              >
              </CardItem>
            </>
          
              
          ))}
               
          </Grid>
        </div>
    );
}

export default FetchApi
