import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"



function Navigation({setCurrent, components}) {

  return (
    <header>
      <Navbar className="Navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#/" id="name">Marilyn Papadopoulos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link className="Nav-link" onClick={()=>setCurrent(components[0])}>About Me</Nav.Link>
              <Nav.Link className="Nav-link" onClick={()=>setCurrent(components[1])}>Portfolio</Nav.Link>
              <Nav.Link className="Nav-link" onClick={()=>setCurrent(components[2])}>Contact</Nav.Link>
              <Nav.Link className="Nav-link" href="#https://docs.google.com/document/d/1ePBWSn9vXs_U7HjXYHE0TXyLnwt2x8qbRlxRhNVxLnk/edit?usp=sharing">Resume</Nav.Link> 
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
}

export default Navigation;