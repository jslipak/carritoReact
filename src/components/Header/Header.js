import React from 'react'
import {Container, Row, Col, Button, Form} from "react-bootstrap"
import NavBar from './../../components/NavBar'

//El memo deja estatico el componente sin renderizarlo en cualquier cambio de estado
const Header = React.memo(({handlerSearch}) => {

    return (
        <Container>
            <NavBar  handlerSearch={handlerSearch} />
        </Container>
    )
});

export default Header
