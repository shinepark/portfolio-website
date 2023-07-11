import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {MdSchool} from 'react-icons/md'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {MdComputer} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          {/*<div className="about_me-image">
            <img src = {ME} alt="About Image" />
          </div>*/}
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <MdSchool className='about_icon'/>
              <h5>Education</h5>
              <small>2nd year Student at The George Washington University</small>
            </article>

            <article className='about_card'>
              <AiOutlineFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>Multiple Completed</small>
            </article>

            <article className='about_card'>
              <MdComputer className='about_icon'/>
              <h5>Languages</h5>
              <small>Java, Python</small>
            </article>
          </div>

          <p>
            I'm currently a 2nd year Mechanical Engineering Student at the George Washington University in Washington DC. My concentration is in Aerospace and I'm planning on doing a minor in Computer Science as well.
          </p>

          <a href= "#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About