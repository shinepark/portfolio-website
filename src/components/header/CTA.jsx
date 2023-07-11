import React from 'react'
import RESUME from '../../assets/Resume.pdf'

const CTA = () => {
    return(
        <div>
            <a href={RESUME} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default CTA