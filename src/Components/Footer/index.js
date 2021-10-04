import React from "react"
import {Container, Row, Col} from "react-bootstrap"

function Footer () {
    return (

        <Container className="footer-container">
            <Row className="footer-links">
                <Col><a href="https://github.com/MarilynPapadopoulos"><i className="fab fa-github footer-links fa-4x"></i></a></Col>
                <Col><a href="https://www.linkedin.com/in/marilyn-papadopoulos/"><i className="fab fa-linkedin-in footer-links fa-4x"></i></a></Col>
                <Col><a href="mailto:marilyn.volk@gmail.com"><i className="fas fa-envelope footer-links fa-4x"></i></a></Col>
              
            </Row>
        </Container>
    )
   
}

export default Footer