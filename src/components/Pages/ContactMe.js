import React from 'react';

function ContactMe() {
    return (
        <div>
            <input type='text' className='emailinput' placeholder='Email'></input>
            <input type='text' className='nameinput' placeholder='Name'></input>
            <input type='text' className='messageinput' placeholder='Message'></input>
            <btn className='submitbtn'>Submit</btn>
        </div>
    )
};

export default ContactMe;