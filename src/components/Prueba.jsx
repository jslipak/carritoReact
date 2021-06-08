import React from 'react'

const Prueba = (props) => {
  
    console.log(props)

    return (
        <div>
             {props.children}
        </div>
    )
}

export default Prueba
