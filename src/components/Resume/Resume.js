import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './resume.css';
import Franklin_Resume2022 from '../../assets/Franklin_Resume2022.pdf';
import { Button } from 'react-bootstrap';

export default function Resume() {
    return (
        <section className="resume">
            <h2 className="resume-title">Experience</h2>
            <div className='resume-link-container'>
                <Button className='button' variant="primary">Download Resume</Button>{' '}
                <div className='resumeContainer'>
                    <ListGroup className='skills'>
                        <h3>Technical Skills:</h3>
                        <h4>Front-end:</h4>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>jQuery </ListGroup.Item>
                        <ListGroup.Item>Bootstrap </ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>Handlebars</ListGroup.Item>
                        <h4>Back-end:</h4>
                        <ListGroup.Item>Node</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                        <ListGroup.Item>MySQL/Sequelize </ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>Mongoose</ListGroup.Item>
                        <ListGroup.Item>GitHub</ListGroup.Item>
                    </ListGroup>
                </div>
                </div>
                </section>
                );
    }