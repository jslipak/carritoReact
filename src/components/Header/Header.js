import React from 'react'
import {Container, Row, Col, Button, Form} from "react-bootstrap"
import {useHistory} from 'react-router-dom' //cuando se anidan componentes se pierde la info, y este hooks genera este historial de navegacion
import NavBar from './../../components/NavBar'

//El memo deja estatico el componente sin renderizarlo en cualquier cambio de estado
const Header = React.memo(({handlerSearch}) => {

    const history = useHistory();

    const search = (e) =>{
    e.preventDefault();  
    const [{value}] = e.target; //destructuro el primer elemento y me quedo con la prop value. (para no tener un estado)
    const trimvalue = value.trim()
    if(trimvalue){ //si la persona busco algo lo seteamos dentro del estado de la app. 
        handlerSearch(trimvalue);
        history.push(`./products?search=${trimvalue}`)
    }
};
    return (
        <Container>
            <NavBar  handlerSearch={handlerSearch} />
        </Container>
    )
});

export default Header
