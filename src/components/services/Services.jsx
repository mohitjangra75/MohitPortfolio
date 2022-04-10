import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX Designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Attractive Websites and Web Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Secured Backend Connectivity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CRUD Operations.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Android Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Support and Maintenance </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>DATA   ANALYST</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Financial Analytics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sales and Product Analytics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managed Data Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Analytics Consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Analytics Modernization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Management Services</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Carousel and Slider Posts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blog Content Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Motion Graphics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic Design Service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photo Editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>White Paper Engagement </p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services