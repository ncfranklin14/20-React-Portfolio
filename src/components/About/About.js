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
            <img className='profile-pic' src={image.image} alt='' />
            <p className='par'>
                Aspiring full-stack web developer with a Full-Stack Web Development Certificate from the University of Washington. Leveraging a background in Sales, Marketing, and Account Management for technology companies. I bring a unique perspective by having a diverse background on the business side and want to continue a career working on the development and functional side of products.

                I'm passionate about exploring the outdoors and spend my free time enjoying the mountains.
            </p>
        </div>
    );
}
