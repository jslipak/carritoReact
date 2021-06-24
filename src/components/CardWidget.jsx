import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/Icon';



const CardWidget = () => {
    return (
        <div> 
                <IconButton aria-label="addCar">
                   <AddShoppingCartIcon/>
                </IconButton>
        </div>
    )
}

export default CardWidget
