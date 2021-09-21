import React from 'react'
import Navigation from '../Navigation'
import { Navbar, Container }from 'react-bootstrap'


function Header({ setCurrent, components }) {
    return (
        <header>
            <Navbar className="Navbar" expand="lg">
            <Container>
                <Navbar.Brand href="/" id="name">Marilyn <br />Papadopoulos</Navbar.Brand>
                <Navigation setCurrent={setCurrent} components={components} />
            </Container>
            </Navbar>
        </header>
    )
   
}

export default Header;