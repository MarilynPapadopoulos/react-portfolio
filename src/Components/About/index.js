import React from 'react';
import Profile2 from '../../assets/me/Profile2.png'
import { Container, Image, Col, Row  } from 'react-bootstrap'


function About() {
  return (
      <Container className="about-container">
        <Row className="about">
          <Col className ="about-column" xs={12} md={4}>
          <h2>About Me</h2>
            <Image src= {Profile2} width="180" height="171" alt="profile picture" roundedCircle />
          </Col>
          <Col xs={12} md={8}>
          <p className="about-text">My name is Marilyn and this portoflio showcases what I have learned as a web developer student.  I will receive my certificate from the University of Toronto Bootcamp program in August of this year.  Until recently, I was working as a flight attendant.  This was a very rewarding career and the perks were amazing!   
          
          I received my bachelors degree from the University of Windsor.  While there, I attended some HTML and CSS classes.  My education also focused on logic and argument. I thoroughly enjoyed those types of concepts and decided to work that into a new career.  Always intrigued by the world of a web developer I decided to take the plunge!</p>
          </Col>
        </Row>
      </Container>
  );
}

export default About;