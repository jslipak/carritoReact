import React, {useEffect, useState} from 'react'
import {FETCHING, FETCH_SUCCES} from './../Reducers/actions/products';
import {BASE_URL} from './../constants';
import CardItem  from './../components/CardIItem'
import autitos_madera from '../assets/images/autitos_madera.jpg'
import Card from '@material-ui/core/Card';
import { CardActions } from '@material-ui/core';


function FetchApi() {

    const [productos, setProductos] = useState([])

    const fetchData = async () => {
        
        try{
            const res = await fetch(`${BASE_URL}/sites/MLA/search?q=autosdeMadera&limit=6`)//URL aqui. 
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
            <> 
          {productos.map( (props)=> (
              <><h2>Probando maps FetchApi</h2>
              {console.log(productos)}
              <CardItem 
              name={props.title}
              description={props.price}
              img={props.thumbnail}
              >
              </CardItem>
              <hr/>
            </>
              
          ))}
        </>
    );
}

export default FetchApi
