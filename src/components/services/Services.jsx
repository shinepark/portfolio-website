import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h2>Classes and Projects</h2>
      <div className="container services_container">
          <article className="service">
            <div className="service_head">
              <h3>Projects</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Hand Detection Game</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Sudoku Solver</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service_head">
              <h3>Classes</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Engineering Drawing and Computer Graphics (MAE 1004)</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Intro to Engineering Computations (MAE 1117)</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>University Physics I (PHYS 1021)</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Linear Algebra (MATH 2184)</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Multivariable Calculus (MATH 2233)</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>General Chemistry I (CHEM 1111)</p>
              </li>
            </ul>
          </article>


          <article className="service">
            <div className="service_head">
              <h3>Work Experience</h3>
            </div>
            <ul className='service_list'>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Research Assistant at USC (1 year)</p>
              </li>
            </ul>
          </article>

          
      </div>
    </section>
  )
}

export default Services