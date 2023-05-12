import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ResumePDF from '../../assets/Resume-Gibson-Berglund-2023.pdf'

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
                <Button href={ResumePDF} download={ResumePDF} style={{width: '150px', textAlign: 'center'}}variant="contained" color="secondary">Download My Resume</Button>
            </div>
        </div>
    </section>
  );
}

export default ContactMe;