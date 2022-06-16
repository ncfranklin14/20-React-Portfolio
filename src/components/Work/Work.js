import React from 'react';
import './work.css';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Socializer from '../../assets/Socializer.png'
import Planter from '../../assets/Planter.png'
import Planner from '../../assets/Planner.png'
import MovementMapper from "../../assets/MovementMapper.png"

export default function Work() {
    const projects = [{
        title: 'Socializer',
        image: Socializer,
        description: '',
        deployed: 'https://anoorishad.github.io/Socializer/',
        github: 'https://github.com/anoorishad/Socializer'

    },
    {
        title: ' The Planter',
        image: Planter,
        description: '',
        deployed:'https://secret-waters-02737.herokuapp.com/login',
        github:'https://github.com/ncfranklin14/the-planter'
    },
    {
        title: 'Workday Planner',
        image: Planner,
        description: '',
        deployed:'https://ncfranklin14.github.io/05-Third-Party-APIs-Work-Day-Scheduler/',
        github:'https://github.com/ncfranklin14/05-Third-Party-APIs-Work-Day-Scheduler'
    },
    {
        title: 'Movement Mapper',
        image: MovementMapper,
        description: '',
        deployed:'https://github.com/saghar-b/Movement-Mapper-Frontend',
        github:'https://movementmapper-front.herokuapp.com/'
    }]
    return (
        <Container className='myProjects'>
            <h1>My Work</h1>
            <Row xs={1} md={2} className="g-4">
                {projects.map((proj) => (
                    <Col>
                        <Card className='cards'>
                            <Card.Img variant="top" src={proj.image} />
                            <Card.Body>
                                <Card.Title>{proj.title}</Card.Title>
                                <Card.Text>
                                    {proj.description}
                                </Card.Text>
                                <Card.Link href={proj.deployed}>Deployed</Card.Link>
                                <Card.Link href={proj.github}>Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

