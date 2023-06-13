import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinkedInIcon from '../../assets/images/free-linkedin-logo-icon-2430-thumb.png';

import ResumePDF from '../../assets/Resume-Gibson-Berglund-2023.pdf';
import pdfIcon from '../../assets/images/pdf-icon.png';

function ContactMe() {
  return (
   <section className='contactandresume' >
        {/* <div className='contactform'>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <h3 style={{textAlign: 'center'}}>Contact Me</h3>
                <div><TextField fullWidth id="filled-basic" label="Name" variant="filled" /></div>
                <div><TextField fullWidth id="filled-basic" label="Email" variant="filled" /></div>
                <div className='contactmemessage'>
                    <TextField fullWidth id="filled-multiline-static" label="Message" multiline rows={4} variant="filled" />
                </div>
                <div className='submitbtn'>
                <Button variant="outlined" color="primary">Submit</Button>
                </div>
            </Box>
        </div> */}
        <div className='resumediv'>
            <div className='resumebtn'>
                <Button href={ResumePDF} download={ResumePDF} style={{width: '150px', textAlign: 'center', backgroundColor: 'rgba(125, 125, 125, 0.4)'}}variant="contained"   >Download My Resume<img className='icon' src={pdfIcon}></img></Button>
            </div>
            <div style={{marginLeft: '20%'}}>
                <h2>Email Me: </h2>
                <p>berglundgibson@gmail.com</p>
            </div>
            {/* <div className='resumebtn'>
                
                <Button variant="contained" href="https://www.linkedin.com/in/gibson-berglund/" color="primary"><img className='icon' src={LinkedInIcon}></img>Find me on LinkedIn</Button>
            </div> */}
        </div>
    </section>
  );
}

export default ContactMe;