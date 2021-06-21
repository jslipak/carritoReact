
import React ,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BASE_URL} from '../constants';
import {useParams} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 845,
    marginBottom: 100,
  },
  media: {
    height: 240,
  },

});

const ItemDetailCard = () => {

    const classes = useStyles();



    const [dataDetail, setProductos] = useState([])


    let id = useParams().id; 
    let title = useParams().title;
    console.log(id, title)

    const fetchData = async () => {
        
        try{
            const res = await fetch(`${BASE_URL}/sites/MLA/search?q=${title}&FilterID=${id}`)//URL aqui. 
            const datos = await res.json()
            //console.log(datos.results)
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
          <CardMedia
            component="img"
            alt="ProductoDetalle"
            height="400"
            Width="400"
            image={dataDetail.thumbnail}
            title=    {dataDetail.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {dataDetail.title}
             
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             Precio: {dataDetail.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Volver
          </Button>
          <Button size="small" color="primary">
            Comprar
          </Button>
        </CardActions>
      </Card>
    );
  }

export default ItemDetailCard
