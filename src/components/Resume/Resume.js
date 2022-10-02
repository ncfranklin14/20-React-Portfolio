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
                <div className='front'>
                    <h4>Front-end:</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML5</li>
                        <li>JQuery</li>
                        <li>Bootstrap</li>
                        <li>Handlebars</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
                <div className='back'>
                    <h4>Back-end:</h4>
                    <ul>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>MySQL/Sequelize </li>
                        <li>MongoDB/Mongoose</li>
                    </ul>
                </div>
            </div>
        </section >
    );
}