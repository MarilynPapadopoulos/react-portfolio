import React from 'react';
import Profile2 from '../../assets/me/Profile2.png'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
  return (
    <section className="About">
       <h2>About Me</h2>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src= {Profile2} width="180" height="171" alt="profile picture" roundedCircle />
          </Col>
          <Col xs={12} md={8}>
          <p className="About-Text">My name is Marilyn and this portoflio showcases what I have learned as a web developer student.  I will receive my certificate from the University of Toronto Bootcamp program in August of this year.  Until recently, I was working as a flight attendant.  This was a very rewarding career and the perks were amazing!   
          
          I received my bachelors degree from the University of Windsor.  While there, I attended some HTML and CSS classes.  My education also focused on logic and argument. I thoroughly enjoyed those types of concepts and decided to work that into a new career.  Always intrigued by the world of a web developer I decided to take the plunge!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;