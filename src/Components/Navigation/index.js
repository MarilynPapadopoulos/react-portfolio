import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"



function Navigation({setCurrent, components}) {
  const [active, setActive] = useState('About Me');
  function updatePage(current, name) {
    setCurrent(current)
    setActive(name)
  }

  return (
      <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link className={active==='About Me' ? 'Nav-active': "Nav-link"} onClick={()=>updatePage(components[0], 'About Me')}>About Me</Nav.Link>
              <Nav.Link className={active==='Portfolio' ? 'Nav-active': "Nav-link"}onClick={()=>updatePage(components[1], 'Portfolio')}>Portfolio</Nav.Link>
              <Nav.Link className={active==='Contact' ? 'Nav-active': "Nav-link"}onClick={()=>updatePage(components[2], 'Contact')}>Contact</Nav.Link>
              <Nav.Link className= "Nav-link" href="https://docs.google.com/document/d/1ePBWSn9vXs_U7HjXYHE0TXyLnwt2x8qbRlxRhNVxLnk/edit?usp=sharing">Resume</Nav.Link> 
            </Nav>
        </Navbar.Collapse>
     </>
  );
}

export default Navigation;