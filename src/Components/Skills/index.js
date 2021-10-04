import React from 'react';

import { Container, Col, Row  } from 'react-bootstrap'

function Skills() {
    return (
        <Container className="skills-container">
            <Row className="skills">
                <Col className="skills-column" sm={6} md={4} lg={2}>
                    <div>
                        <i class="fab fa-brands fa-git-alt fa-8x"></i>
                        <h5>Git</h5>
                    </div>
                </Col>    
                <Col className="skills-column" sm={6} md={4} lg={2} col-half-offset>
                    <div>
                        <i class=" fab fa-brands fa-html5 fa-8x"></i>
                        <h5>HTML5</h5>
                    </div>
                </Col>
                <Col className="skills-column" sm={6} md={4} lg={2} col-half-offset>
                    <div>
                        <i class=" fab fa-brands fa-css3 fa-8x"></i>
                        <h5>CSS</h5>
                    </div>
                   
                </Col>
                <Col className="skills-column" sm={6} md={4} lg={2} col-half-offset>
                    <div>
                        <i class="fab fa-brands fa-js fa-8x"></i>
                        <h5>JavaScript</h5>
                    </div>
                        
                </Col>
                <Col className="skills-column" sm={6} md={4} lg={2} col-half-offset>
                    <div>
                        <i class="fab fa-brands fa-bootstrap fa-8x"></i>
                        <h5>Bootstrap</h5>
                    </div>
                        
                </Col>
            </Row>    
            <Row className="skills">  
                <Col className="skills-column" sm={6} md={4} lg={2} col-half-offset>
                    <div>
                        <i class="fab fa-brands fa-react fa-8x"></i>
                        <h5>React</h5>
                    </div>
                   
                </Col>   
                <Col className="skills-column" sm={6} md={4} lg={2} col-half-offset>
                    <div>
                        <i class="icon-mysql-alt"></i>
                        <h5>MySQL</h5>
                    </div>
                   
                </Col>
                <Col className="skills-column" sm={6} md={4} lg={2} col-half-offset>
                    <div>
                        <i class="fab fa-brands fa-node fa-8x"></i>
                        <h5>Node.js</h5>
                    </div>
                   
                </Col>
                <Col className="skills-column" sm={6} md={4} lg={2} col-half-offset>
                    <div>
                        <i class="icon-mongodb"></i> 
                        <h5>MongoDB</h5>
                    </div>
                   
                </Col>
                <Col className="skills-column" sm={6} md={4} lg={2}col-half-offset>
                    <div>
                        <i class="icon-jquery"></i>
                        <h5>jQuery</h5> 
                    </div>
                </Col>      
            </Row>
        </Container>
    )
}
export default Skills;