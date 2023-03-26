import React from 'react';
import ProfilePic from '../../assets/images/profile-photo.JPG';

function AboutMe() {
    return (
        <div>
            <div className='aboutmesection'>
                <h2>About Me</h2>
                <p>Gibson Berglund is a full-stack web developer, originally from Minneapolis, MN. He has a degree in anthropology and psychology from the U of Iowa, and is also a CELTA certified ESL teacher. He is a creative writer in his spare time.</p>
                <img src={ProfilePic} className='profilepic' alt='Photo of Gibson Berglund with a cat on his shoulder'></img>
            </div>
        </div>
    )
};

export default AboutMe;