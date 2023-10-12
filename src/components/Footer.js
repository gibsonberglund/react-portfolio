import React from 'react';
import Button from '@mui/material/Button';
import LinkedInIcon from '../assets/images/free-linkedin-logo-icon-2430-thumb.png';
import GithubIcon from '../assets/images/github-icon.png';

function Resume({currentPage}) {
    return (
<div className='footer' style={currentPage==='PortfolioItems' ? {marginTop: '-0.75%'} : {marginTop: '5%'}}>
    <a style={{width: "25%", textDecoration: "none", fontSize: "larger", color: "white", margin: "1%"}} href="https://www.linkedin.com/in/gibson-berglund/">Find Me On LinkedIn<img className='icon' src={LinkedInIcon}></img></a>
    <a style={{width: "25%", textDecoration: "none", fontSize: "larger", color: "white", margin: "1%"}} href="https://github.com/gibsonberglund">View My Github Profile<img className='icon' src={GithubIcon}></img></a>
</div>
    );
};

export default Resume;