import React from 'react'
import {Container, Row, Col, Button, Form} from "react-bootstrap"
import {useHistory} from 'react-router-dom' //cuando se anidan componentes se pierde la info, y este hooks genera este historial de navegacion
import NavBar from './../../components/NavBar'

//El memo deja estatico el componente sin renderizarlo en cualquier cambio de estado
const Header = React.memo(({handlerSearch}) => {

    const history = useHistory();

  
    return (
        <Container>
            <NavBar  handlerSearch={handlerSearch} />
        </Container>
    )
});

export default Header
