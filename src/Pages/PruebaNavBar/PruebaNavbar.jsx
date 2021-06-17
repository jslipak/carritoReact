import React from 'react'
import {Link, NavLink}from ''

const PruebaNavbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Carrito">Carrito</NavLink>
                </li>
            
                <li>
                    <NavLink to="/Preguntas">Preguntas</NavLink>
                </li>
                <li>
                    <NavLink to="/Products">Products</NavLink>
                </li>
            </ul>
            
        </nav>
    )
}

export default PruebaNavbar
