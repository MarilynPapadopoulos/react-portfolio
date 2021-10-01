import React from 'react';
import Profile2 from '../../assets/me/Profile2.png'
import { Container, Image, Col, Row  } from 'react-bootstrap'


function About() {
  return (
      <Container className="about-container">
        <Row className="about">
          <Col className ="about-column" xs={12} md={4}>
          <h2>About Me</h2>
            <Image src= {Profile2} width="250" height="250" alt="profile picture" roundedCircle />
          </Col>
          <Col xs={12} md={8}>
          <p className="about-text">I am a front-end developer maximizing my background in aviation and law to be a part of a more valuable web user experience. 
          I recently earned a certificate in full stack development from the University of Toronto.  While there I developed skills in HTML, CSS, Javascript and React.js.  
          I naturally enjoy problem solving and find it exciting to work through solutions using previous experience, research or brainstorming with my peers.  
          I am passionate about learning, and with each project my goal is to further develop my skill set to enhance the user experience.  I worked on an agile team of five to develop a single-page MERN social app for dogs.
          I am excited to leverage my skills as part of quality-driven team and build better experiences on the web.
</p>
          </Col>
        </Row>
      </Container>
  );
}

export default About;