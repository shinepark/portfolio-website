import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
            <h3>Languages</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience_backend">
        <h3>Computer Graphics</h3>
        <div className="experience_content">
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>AutoCAD</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>SolidWorks</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>OnShape</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience