
import React ,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BASE_URL} from '../constants';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ItemDetailCard = () => {

    const classes = useStyles();

    const [dataDetail, setProductos] = useState([])

    const fetchData = async () => {
        
        try{
            const res = await fetch(`${BASE_URL}/sites/MLA/search?q=autosdeMadera&limit=1`)//URL aqui. 
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
        {dataDetail.map( (props, index)=> (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            key={index}
            id={props.id} 
            className={classes.media}
            image={props.thumbnail}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <p>{props.title}</p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
                <p> {props.description}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Volver
          </Button>
          <Button size="small" color="primary">
            Agregar al Carrito
          </Button>
        </CardActions>
      </Card>
        ))}
      </>
      
    )
}

export default ItemDetailCard
