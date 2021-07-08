import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'



function Nav({setCurrent, components}) {

  return (
    <header>
      

      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setCurrent(components[0])}>About Me</Nav.Link>
            <Nav.Link onClick={()=>setCurrent(components[1])}>Portfolio</Nav.Link>
            <Nav.Link onClick={()=>setCurrent(components[2])}>Contact</Nav.Link>
            <Nav.Link href="#https://docs.google.com/document/d/1ePBWSn9vXs_U7HjXYHE0TXyLnwt2x8qbRlxRhNVxLnk/edit?usp=sharing">Resume</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>







      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <h2>
      <a href="/">Marilyn Papadopoulos</a>
    </h2>
    <nav>
      <ul>
        <li className="navLink"onClick={()=>setCurrent(components[0])}>
          About Me
        </li>
        <li className="navLink" onClick={()=>setCurrent(components[1])}>
          Portfolio
        </li>
        <li className="navLink" onClick={()=>setCurrent(components[2])}>
          Contact
        </li>
        <li className="navLink">
          <a href="https://docs.google.com/document/d/1ePBWSn9vXs_U7HjXYHE0TXyLnwt2x8qbRlxRhNVxLnk/edit?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </nav>
    </Navbar.Collapse>
  </header>
  );
}

export default Nav;