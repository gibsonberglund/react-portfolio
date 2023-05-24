import React from 'react';
import ProfilePic from '../../assets/images/profile-photo.jpg';

function AboutMe() {
    return (
        <div>
            <div className='aboutmesection'>
                
                <p className='aboutmetext'><h3>About Me</h3>Gibson Berglund is a full-stack web developer from Minneapolis, MN. He received a certification in Web Development from the U of MN in April, 2023, where he gained experience with Javascript, React, Handlebars, SQL, MongoDB, and many other development tools. Outside of Web Development, he has a degree in anthropology and psychology from the U of Iowa, and is also a CELTA certified ESL teacher.</p>
                <img src={ProfilePic} className='profilepic' alt='Photo of Gibson Berglund with a cat on his shoulder'></img>
            </div>
            <div className='skillsection'>
                <h2>Skills: </h2>
                <p className='skillslist'>HTML, CSS, Javascript, Node, Express, SQL, MySQL, NoSQL, MongoDB, Handlebars, React, Apollo, Git</p>
            </div>
        </div>
    )
};

export default AboutMe;