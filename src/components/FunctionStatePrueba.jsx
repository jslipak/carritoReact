import React, {useState} from 'react'
import {Button} from '@material-ui/core'; //Componente de material UI 

function FunctionStatePrueba() {
    const [animal, setAnimal] = useState("Caniche")
    function handlerChange(e){
        setAnimal(' Ahora es gato ')
    }
    return (
        <div>
            <Button 
                variant="contained" 
                onClick={handlerChange}>
                  Change animal
                </Button>
                {console.log(animal)}
                 
        </div>
    )
}

export default FunctionStatePrueba
