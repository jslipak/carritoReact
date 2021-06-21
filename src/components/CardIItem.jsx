
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { brown } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Contador from './Contador.jsx'
import {
  Link, 
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {

    height: 100,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: brown[400],
  },
}));

const RecipeReviewCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  
  };


  return (
   
    <Card className={classes.root}> 
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} >
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={<small> {new Date().toLocaleString()}</small>}
      />

  
      <Link to={`/ItemDetailCard/${props.id}/${props.name}`}>
      <CardMedia
        className={classes.media}
        id={props.id}
        image= {props.img}
        title="Producto">
        </CardMedia>
      </Link>
   
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          PRECIO: {props.description}          
          <Contador/>                                          {/*-----------CONTADOR*--------------*/}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>        
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
              E S P E C I F I C A C I O N E S
          </Typography>
          <Typography paragraph>
        
           Acá van especificaciones si quiero poner

          </Typography>
          <Typography paragraph>
            
           Colores: ROJO, VERDE, AMARILLO , NEGRO

          </Typography>
          <Typography>
          
           ENVIO SIN CARGO
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  )
}
export default RecipeReviewCard
