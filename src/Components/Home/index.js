import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Home() {
    return (
        <Container className="home-container">
            <Row className="home">
                <Col className="home-column">
                    <h2 className="Marilyn-Papadopoulos">Marilyn Papdopoulos</h2>
                    <div>Web Developer</div>
                </Col>
            </Row>
        </Container>

    )
}
export default Home;