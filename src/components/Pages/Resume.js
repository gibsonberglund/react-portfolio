import React from 'react';
import Button from '@mui/material/Button';

function Resume() {
    return (
<div className='resumepage'>
    <div className='resumebtn'>
        <Button variant="contained" href='https://docs.google.com/document/d/1u4NL1CkakeYskCK3FQ1M3_MGEXl0VH6jr3AIgwtqLqQ/edit?usp=sharing' color="secondary">View/Download My Resume</Button>
    </div>
</div>
    );
};

export default Resume;