import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './resume.css';
import Franklin_Resume2022 from '../../assets/Franklin_Resume2022.pdf';
import { Button } from 'react-bootstrap';

export default function Resume() {
    return (
        <section className="resume">
            {/* <h2 className="resume-title">Experience</h2>
            <Button className='button' variant="primary">Download Resume</Button>{' '}
            <aside className='techSkills'>
                <h3>Technical Skills:</h3>
            </aside> */}
            <div className='resumeContainer'>
                <ListGroup className='skills'>
                    <div className='front'>
                        <h4>Front-end:</h4>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>HTML5</ListGroup.Item>
                        <ListGroup.Item>JQuery </ListGroup.Item>
                        <ListGroup.Item>Bootstrap </ListGroup.Item>
                        <ListGroup.Item>ReactJS</ListGroup.Item>
                    </div>
                    <div className='back'>
                        <h4>Back-end:</h4>
                        <ListGroup.Item>NodeJS</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                        <ListGroup.Item>Handlebars</ListGroup.Item>
                        <ListGroup.Item>MySQL/Sequelize </ListGroup.Item>
                        <ListGroup.Item>MongoDB/Mongoose</ListGroup.Item>
                        <ListGroup.Item>GitHub</ListGroup.Item>
                    </div>
                </ListGroup>
            </div>
        </section>
    );
}