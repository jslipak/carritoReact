
import React ,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BASE_URL} from '../constants';
import {useParams} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Contador from './../components/Contador'
import {Divider} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
   position: 'relative',
   left: 100,
   display: 'flex',
   alignItems: 'center',
 
  },
  media: {
    height: 200,
    width: 200,
    paddingLeft: 140,
    
    
  },
  divider:{
    marginTop: 20,
    
  },
  cardContent:{
    width: 100,
  }
  

});

const ItemDetailCard = (props) => {

    const classes = useStyles();

    const [dataDetail, setProductos] = useState([])

    let id = useParams().id; 
    let title = useParams().title;
    console.log(id, title)

   


    const onAdd = (quantityToAdd) => {
      //hemos recibido un evento
    }

    const fetchData = async () => {
        
        try{
            const res = await fetch(`${BASE_URL}/sites/MLA/search?q=${title}&FilterID=${id}`)//URL aqui. 
            const datos = await res.json()
            setProductos(datos.results[0])
            
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('useEffect')
        fetchData()
    },[3000])


    return  (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}
            component="img"
            alt="ProductoDetalle"
            heigth="400"
            image={dataDetail.thumbnail}
            title=    {dataDetail.title}
          />
          </CardActionArea >
          <CardContent classes={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            {dataDetail.title}
             
            </Typography>
            <Typography variant="body2" color="textSecondary" component="H2">
             Precio: {dataDetail.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              Stock: {dataDetail.available_quantity}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Condicion: {dataDetail.condition}
            </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
              Cantidad Vendida: {dataDetail.sold_quantity}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            </Typography>

            <Divider className={classes.divider}/>  

            <Contador onConfirm={onAdd} />  

          </CardContent>

       
      </Card>
    );
  }

export default ItemDetailCard
