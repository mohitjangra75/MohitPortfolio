import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Learning</small>
            </article>

            <article className='about__card'>
              <FiUser className="about__icon"/>
              <h5>Clients</h5>
              <small>69k+ Interaction</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>5+ Projects Deployed</small>
            </article>
          </div>        

          <p>
          Compassionate and dedicated Engineer student, who wants to explore IT fields with the ability of diversed in handling complex situations.
          As an Enthusiastic option trader i have much more patience.
          A critical thinker with the ability to administer appropriate care in a timely manner with a calm demeanor.
          </p>
          <a href='#contact' className='btn btn-primary'>
            LET's Talk
          </a>

        </div>
      </div>
    </section>
  )
}

export default About