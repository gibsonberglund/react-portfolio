import React from 'react';
import ProfilePic from '../../assets/images/profile-photo.jpg';

function AboutMe() {
    return (
        <div>
            <div className='aboutmesection'>
                
                <p className='aboutmetext'><h3>Gibson Berglund is a full-stack web developer</h3>from Minneapolis, MN. He received a certification in Web Development from the U of MN in April, 2023, where he gained experience with Javascript, React, Handlebars, SQL, MongoDB, and many other development tools. Outside of Web Development, he has a degree in anthropology and psychology from the U of Iowa, and is also a CELTA certified ESL teacher.</p>
                <img src={ProfilePic} className='profilepic' alt='Photo of Gibson Berglund with a cat on his shoulder'></img>
            </div>
        </div>
    )
};

export default AboutMe;