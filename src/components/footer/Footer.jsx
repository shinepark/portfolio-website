import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Shine Park</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    <div classsName="footer_copyright">
      <small>&copy; Shine Park. All Rights Reserved</small>
    </div>
    </footer>
  )
}

export default Footer