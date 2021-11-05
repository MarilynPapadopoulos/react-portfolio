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
                            This budget tracker is ideal when Internet connection is unavailable.
                            </Card.Text>
                            <Card.Text>
                                Stack: MongoDb & Express
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
                            A pizza database where you can create recepes and store your pizza creations.
                            </Card.Text>
                            <Card.Text>
                                Stack: MongoDb & Express
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
                            This is a social app for dogs where you can sign up and create a profile.
                            </Card.Text>
                            <Card.Text>
                                Stack: React, JavaScript & MongoDb 
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
                            An online catalogue with zoo animal's and zoo keeper's profiles.
                            </Card.Text>
                            <Card.Text>
                                Stack: JavaScript & Express
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
                            An app to store photo content and a contact.
                            </Card.Text>
                            <Card.Text>
                                Stack: React & JavaScript
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
                            <Card.Title> <a href ="https://marilynpapadopoulos.github.io/food-festival/">Food Festival</a></Card.Title>
                            <Card.Text>
                            Food festival events and ticket information that can be used offline.
                            </Card.Text>
                            <Card.Text>
                                Stack: JavaScript
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