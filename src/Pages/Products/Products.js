import React  from 'react';
import {useEffect, useReducer}  from 'react'
import PropTypes from 'prop-types';
import {productsReducer, initialState} from './../../Reducers/products';
import {FETCHING, FETCH_SUCCES} from './../../Reducers/actions/products';
import {BASE_URL} from './../../constants';
import axios from 'axios';
import CardItem  from '../../components/CardIItem'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        paddingBottom: '100px',
        marginRight: '10px',
      
      }
  
  });

const Products = ({search}) => {
    
    const classes = useStyles();
    const [state, dispatch]  = useReducer(productsReducer, initialState)

    const getProducts = async () => {
        try{
            const {data: info} = await axios.get(
                `${BASE_URL}/sites/MLA/search?q=${search}&limit=8`);
            //console.log(info.results)
            dispatch({type: FETCH_SUCCES, payload: {data: info.results}})
            
        }catch (e){
         //   console.error(e)
        }
    }
    // En useEffect no se puede poner algo ascincronico por eso el getProducts()
    useEffect(() => {
        getProducts();
    },[search]) //el useEffect se dispara cuando cambia el search.

    return (

        <div className={classes.container}> 
         <Grid container spacing={8} >
            {state.products.map( (props, index)=> (
            <>
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
         </Grid>
        </div>
        
    )
};

//Sistema de tipos para decidir que elementos admite un componente y cual no. 
Products.propTypes = {
    search: PropTypes.string,
}

export default Products
