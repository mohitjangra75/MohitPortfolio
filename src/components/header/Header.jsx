import React from 'react'
import Typical from 'react-typical'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>
          Hello I'm MOHIT JANGRA
        </h3>
        <h1>
          <Typical
          loop={Infinity}
          wrapper='b'
          steps={[
            'FULL STACK JAVA DEVELOPER',1000,
            'DATA    ANALYST',1000,
            'ANDROID APPLICATION DEVELOPER',1000,
            'MERN StacK',1000,
            'AVID TRADER',1000
          ]}
          />
        </h1>
        <CTA />
        <HeaderSocials />

        <div className="me"> 
          <img src={ME} alt="me" />
        </div>

        

        <a href="#contact" className="scroll__down">Scroll Down</a>
        
      </div>
      
    </header>
  )
}

export default Header