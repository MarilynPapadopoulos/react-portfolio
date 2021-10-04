import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"



function Navigation({setCurrent, components}) {
  const [active, setActive] = useState('Home');
  function updatePage(current, name) {
    setCurrent(current)
    setActive(name)
  }

  return (
      <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end"  id="basic-navbar-nav">
            <Nav>
            <Nav.Link className={active==='Home' ? 'Nav-active': "Nav-link"} onClick={()=>updatePage(components[0], 'Home')}>Home</Nav.Link>
              <Nav.Link className={active==='About Me' ? 'Nav-active': "Nav-link"} onClick={()=>updatePage(components[1], 'About Me')}>About Me</Nav.Link>
              <Nav.Link className={active==='Portfolio' ? 'Nav-active': "Nav-link"}onClick={()=>updatePage(components[2], 'Portfolio')}>Portfolio</Nav.Link>
              <Nav.Link className={active==='Skills' ? 'Nav-active': "Nav-link"}onClick={()=>updatePage(components[3], 'Skills')}>Skills</Nav.Link>
              {/* 
                <Nav.Link className={active==='Contact' ? 'Nav-active': "Nav-link"}onClick={()=>updatePage(components[4], 'Contact')}>Contact</Nav.Link>
              */}
              <Nav.Link className= "Nav-link" href="https://docs.google.com/document/d/1ePBWSn9vXs_U7HjXYHE0TXyLnwt2x8qbRlxRhNVxLnk/edit?usp=sharing">Resume</Nav.Link> 
            </Nav>
        </Navbar.Collapse>
     </>
  );
}

export default Navigation;