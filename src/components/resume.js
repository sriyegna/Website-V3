import React, { Component } from 'react';
import ResumePDF from '../assets/resume.pdf'

class Resume extends Component {

    render() {
        return (
            <div>
                <embed src={ResumePDF} type="application/pdf" width="100%" height="800px" />
            </div>
        )
    }
}

export default Resume;