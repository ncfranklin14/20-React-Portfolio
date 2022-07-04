import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './resume.css';
import resume from '../../assets/Resume.pdf';
import { Button } from 'react-bootstrap';

export default function Resume() {
    return (
        <section className="resume">
            <h2 className="resume-title">Experience</h2>
            <div className='linkToRes'>
            <a href={resume} download="Resume.pdf">Download Resume </a>
            </div>
            <div className='resumeContainer'>
                <ListGroup className='skills'>
                    <div className='front'>
                        <h4>Front-end:</h4>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>HTML5</ListGroup.Item>
                        <ListGroup.Item>JQuery </ListGroup.Item>
                        <ListGroup.Item>Bootstrap </ListGroup.Item>
                        <ListGroup.Item>Handlebars</ListGroup.Item>
                        <ListGroup.Item>ReactJS</ListGroup.Item>
                    </div>
                    <div className='back'>
                        <h4>Back-end:</h4>
                        <ListGroup.Item>NodeJS</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                        <ListGroup.Item>MySQL/Sequelize </ListGroup.Item>
                        <ListGroup.Item>MongoDB/Mongoose</ListGroup.Item>
                        <ListGroup.Item>GitHub</ListGroup.Item>
                    </div>
                </ListGroup>
            </div>
        </section>
    );
}