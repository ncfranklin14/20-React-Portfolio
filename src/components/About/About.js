import React from 'react';
import './about.css';
import profileImage from '../../assets/profileImage.jpeg'

export default function About() {
    const image = {
        image: profileImage,
    }
    return (
        <div className='aboutContainer'>
                <h1 className='aboutMe'>About Me</h1>
                <img className='profile-pic' src={image.image} alt=''/>
                <p className='par'>
                    Full stack developer leveraging a background in Sales, Marketing, and Account Management for technologoy companies. I bring a unique perscpective by having a diverse background from the business side of tech and now I want to constribute to the functionality.
                </p>
            </div>
    );
}
