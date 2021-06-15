
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
import { orange } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Contador from './Contador.jsx'
import FetchApi from './FetchApi'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    backgroundColor: orange[500],
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
          <Avatar aria-label="recipe" className={classes.avatar}>
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader="Mayo 06, 2021"
      />
      <CardMedia
        className={classes.media}
        image= {props.img}
        title="Producto"
      />
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
          <Typography paragraph>{props.name}</Typography>
          <Typography paragraph>
              E S P E C I F I C A C I O N E S
          </Typography>
          <Typography paragraph>


          - Interior de felpa con microfibra protector anti rayas.
          - 80% Poliester / 10% Espuma de Poliuretano
          - Medidas : 36 x 25,5 x 2 cms
          </Typography>
          <Typography paragraph>
            
           Colores: ROJO, VERDE, AMARILLO , NEGRO

          </Typography>
          <Typography>
          
          ENVIO GRATIS
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  )
}
export default RecipeReviewCard
