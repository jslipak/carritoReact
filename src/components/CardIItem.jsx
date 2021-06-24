
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { brown } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  Link, 
} from "react-router-dom";


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 200,
    paddingTop: '56.25%', 
  },
  avatar: {
    backgroundColor: brown[400],
  },
}));

const RecipeReviewCard = (props) => {
  const classes = useStyles();
 
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
                                           {/*-----------CONTADOR*--------------*/}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>        

      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
      </IconButton>
       
       
      <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
    
  )
}
export default RecipeReviewCard
