import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BASE_URL} from '../constants';
import CardItem  from '../components/CardIItem'
import { Row } from 'react-bootstrap';

const useStyles = makeStyles({
    container: {
        display: 'flex',
      }
  
  });
  
function FetchApi() {

    const classes = useStyles();

    const [productos, setProductos] = useState([])

    const fetchData = async () => {
        
        try{
            const res = await fetch(`${BASE_URL}/sites/MLA/search?q=juguetesdemadera&limit=6`)//URL aqui. 
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
         
          {productos.map( (props, index)=> (
              <>
              {console.log(productos)}
              <CardItem 
              key={index}
              id={props.id} 
              name={props.title}
              description={props.price}
              img={props.thumbnail}
              >
              </CardItem>
              <hr/>
              
            </>
          
              
          ))}
        </div>
    );
}

export default FetchApi
