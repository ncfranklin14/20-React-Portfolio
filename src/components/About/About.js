import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './about.css';

export default function About() {
    return (
        <>
        <img className='profile-pic' src='images/profile.jpg' alt='' />
            <div className='about' >
                <h1>About Me</h1>
                <p>
                    Full stack developer leveraging a background in Sales, Marketing, and Account Management for technologoy companies. I bring a unique perscpective by having a diverse background from the business side of tech and now I want to constribute to the functionality.
                </p>
            </div>
            <ListGroup className='skills'>
                <h3>TECHNICAL SKILLS</h3>
                    <ListGroup.Item>JavaScript</ListGroup.Item>
                    <ListGroup.Item>CSS</ListGroup.Item>
                    <ListGroup.Item>HTML</ListGroup.Item>
                    <ListGroup.Item>jQuery </ListGroup.Item>
                    <ListGroup.Item>Bootstrap </ListGroup.Item>
                    <ListGroup.Item>Node</ListGroup.Item>
                    <ListGroup.Item>Express</ListGroup.Item>
                    <ListGroup.Item>SQL</ListGroup.Item>
                    <ListGroup.Item>MySQL </ListGroup.Item>
                    <ListGroup.Item>MongoDB</ListGroup.Item>
                    <ListGroup.Item>Mongoose</ListGroup.Item>
                    <ListGroup.Item>React</ListGroup.Item>
                    <ListGroup.Item>Handlebars</ListGroup.Item>
                    <ListGroup.Item>GitHub</ListGroup.Item>
            </ListGroup>
        </>
    );
}
