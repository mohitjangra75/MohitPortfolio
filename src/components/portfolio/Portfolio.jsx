import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FOOD - CORNER',
    github: 'https://github.com/mohitjangra75/Food-corner',
    demo: 'https://mohitjangra75.github.io/Food-corner/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'NETFLIX - CLONE',
    github: 'https://github.com/mohitjangra75/Netflix-clone',
    demo: 'https://verdant-rolypoly-6cb761.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'CAPTCHA GENERATOR',
    github: 'https://github.com/mohitjangra75/CaptchaGenerator',
    demo: 'https://mohitjangra75.github.io/CaptchaGenerator/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'CHAT BOT',
    github: 'https://github.com/mohitjangra75/Chatbot',
    demo: 'https://mohitjangra75.github.io/Chatbot/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'PROGRAMMING - FLEEK',
    github: 'https://github.com/mohitjangra75/Programming-Fleek',
    demo: 'https://mohitjangra75.github.io/Programming-Fleek/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'PORTFOLIO',
    github: 'https://github.com/mohitjangra75/Portfolio',
    demo: 'https://mohitjangra75.github.io/Portfolio/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {  
      data.map(({id, image, title, github, demo}) => {
       return (
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
             <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
           <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
       </article>
    )
    })
  }
      </div>
    </section>
  )
}

export default Portfolio