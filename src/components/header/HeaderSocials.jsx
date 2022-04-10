import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrGithub} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/mohitjangra75" target="_blank"><GrGithub/></a>
        <a href="https://www.linkedin.com/in/mohit-jangra-719a66203/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/mohit.jangra75/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/Mohitjangra200" target="_blank"><ImTwitter/></a>
        
    </div>
  )
}

export default HeaderSocials


