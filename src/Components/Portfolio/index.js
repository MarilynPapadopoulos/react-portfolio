import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BudgetTrack from  '../../assets/projects/BudgetTrack.png'
import PizzaHunt from  '../../assets/projects/PizzaHunt.png'
import NoteTaker from  '../../assets/projects/NoteTaker.png' 
import ZooKeepr from  '../../assets/projects/ZooKeepr.png'
import PhotoPort from  '../../assets/projects/PhotoPort.png'
import FoodFestival from  '../../assets/projects/FoodFestival.png'

function Portfolio () {
    return (

    <>
        <Container>
             <Row>
                <Col sm={12} md={6} lg={4}>  
                    <a href ="https://whispering-falls-82185.herokuapp.com/"><h2>Budget Tracker</h2></a>
                    <Image src ={BudgetTrack} width="200" height="180" fluid/>
                    <a href ="https://github.com/MarilynPapadopoulos/Budget-Tracker.git"><div><i className="fab fa-github dark-color" ></i></div></a>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <a href ="https://immense-wave-91542.herokuapp.com/"><h2>Pizza Hunt</h2></a>
                    <Image src= {PizzaHunt} width="200" height="180" fluid/>
                    <a href ="https://github.com/MarilynPapadopoulos/Pizza-Hunt.git"><div><i className="fab fa-github dark-color"></i></div></a>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <a href ="https://rocky-beyond-34880.herokuapp.com/"><h2>Note Taker</h2></a>
                    <Image src= {NoteTaker} width="200" height="180" fluid/>
                    <a href ="https://github.com/MarilynPapadopoulos/Note-Taker.git"><div><i className="fab fa-github dark-color"></i></div></a>
                </Col>
           
                <Col sm={12} md={6} lg={4}>
                    <a href ="https://agile-eyrie-87704.herokuapp.com/"><h2>Zoo Keepr</h2></a>
                    <Image src= {ZooKeepr} width="200" height="180" fluid/>
                    <a href ="https://github.com/MarilynPapadopoulos/zookeepr.git"><div><i className="fab fa-github dark-color"></i></div></a>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <a href =" https://marilynpapadopoulos.github.io/photo-port/"><h2>Photo Port</h2></a>
                    <Image src= {PhotoPort} width="200" height="180"  fluid/>
                    <a href ="https://github.com/MarilynPapadopoulos/photo-port.git"><div><i className="fab fa-github dark-color"></i></div></a>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <a href ="https://immense-wave-91542.herokuapp.com/"><h2>Food Festival</h2></a>
                    <Image src= {FoodFestival} width="200" height="180" fluid/>
                    <a href ="https://github.com/MarilynPapadopoulos/food-festival.git"><div><i className="fab fa-github dark-color"></i></div></a>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default Portfolio;