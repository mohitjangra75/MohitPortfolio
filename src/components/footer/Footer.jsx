import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { GrGithub } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      |<a href="#" className='footer__logo'>Mohit Jangra</a>
      <ul className='permanlinks'>
        <li><a href='#'>Home</a> </li>
        <li><a href='#about'>About</a> </li>
        <li><a href='#experience'>Experience</a> </li>
        <li><a href='#services'>Services</a> </li>
        <li><a href='#portfolio'>Portfolio</a> </li>
        <li><a href='#contact'>Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohit-jangra-719a66203/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/mohitjangra75" target="_blank"><GrGithub /></a>
        <a href="https://www.instagram.com/mohit.jangra75/" target="_blank"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; MOHIT. All Rights Reserved. 
        </small>
      </div>

    </footer>
  )
}

export default Footer