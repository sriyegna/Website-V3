import React, { Component } from 'react';
import ResumePDF from '../assets/resume.pdf';
import Resume1 from '../assets/resume-1.png';
import Resume2 from '../assets/resume-2.png';
import { Button } from 'react-mdl';

class Resume extends Component {

    render() {
        return (
            <div className="container">            
                <div className="visible-on-desktop">
                    <div style={{marginLeft: '10%', marginRight: '10%', marginBottom: '10%', marginTop: '5%'}}>
                        <embed src={ResumePDF} type="application/pdf" width="100%" height="800px" />
                    </div>
                </div>
                <div className="visible-on-mobile">
                    <a href={ResumePDF}><Button raised accent style={{marginBottom: '30px'}}>Download Resume</Button></a>
                    <img className="resume-image" src={Resume1} />
                    <img className="resume-image" src={Resume2} style={{marginTop: '30px', marginBottom: '30px'}}/>

                </div>
                
            </div>
        )
    }
}

export default Resume;