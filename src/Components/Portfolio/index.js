import React from 'react';
import '../../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import BudgetTrack from  '../../assets/projects/BudgetTrack.png'
import PizzaHunt from  '../../assets/projects/PizzaHunt.png'
import PuppyLove from  '../../assets/projects/PuppyLove.png' 
import ZooKeepr from  '../../assets/projects/ZooKeepr.png'
import PhotoPort from  '../../assets/projects/PhotoPort.png'
import FoodFestival from  '../../assets/projects/FoodFestival.png'

function Portfolio () {
    return (

    <>
        <Container className="portfolio-container">
             <Row>
                <Col sm={12} md={6} lg={4}>
                <Card className="portfolio-card">
                    <Card.Img variant="top" src={BudgetTrack}  />
                    <Card.Body>
                    <Card.Title> <a href ="https://immense-wave-91542.herokuapp.com/">Budget Tracker</a></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href ="https://github.com/MarilynPapadopoulos/Budget-Tracker.git">
                        <i className="fab fa-github dark-color" ></i></a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card className="portfolio-card">
                    <Card.Img variant="top" src={PizzaHunt}  />
                    <Card.Body>
                        <Card.Title className="card-title"> <a href ="https://immense-wave-91542.herokuapp.com/">Pizza Hunt</a></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href ="https://github.com/MarilynPapadopoulos/Pizza-Hunt.git">
                        <i className="fab fa-github dark-color" ></i></a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card className="portfolio-card">
                    <Card.Img variant="top" src={PuppyLove}  />
                    <Card.Body>
                        <Card.Title> <a href ="https://puppy-love-date.herokuapp.com/">Puppy Love</a></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href ="https://github.com/MAsuamah/puppy-love.git">
                        <i className="fab fa-github dark-color" ></i></a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card className="portfolio-card">
                    <Card.Img variant="top" src={ZooKeepr} />
                    <Card.Body>
                        <Card.Title> <a href ="https://agile-eyrie-87704.herokuapp.com/">ZooKeepr</a></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href ="https://github.com/MarilynPapadopoulos/zookeepr.git">
                        <i className="fab fa-github dark-color" ></i></a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card className="portfolio-card">
                    <Card.Img variant="top" src={PhotoPort} />
                    <Card.Body>
                        <Card.Title> <a href ="https://marilynpapadopoulos.github.io/photo-port/">Photo Port</a></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href ="https://github.com/MarilynPapadopoulos/photo-port.git">
                        <i className="fab fa-github dark-color" ></i></a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card className="portfolio-card">
                    <Card.Img variant="top" src={FoodFestival} />
                    <Card.Body>
                        <Card.Title> <a href ="https://immense-wave-91542.herokuapp.com/">Food Festival</a></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href ="https://github.com/MarilynPapadopoulos/food-festival.git">
                        <i className="fab fa-github dark-color" ></i></a>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default Portfolio;