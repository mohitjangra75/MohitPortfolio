import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FULL STACK JAVA DEVELOPER</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>CSS-Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>NodeJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>ReactJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>MongoDb</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Spring Boot & React</h4>
              </div>
            </article>
          </div>
        </div>



        <div className="experience__backend">
        <h3>DATA ANALYST</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Tableau</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>PythonR</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Machine Learning</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Data Wrangling</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Excel</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>PROGRAMMING & COGNIZANCE</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>C , C++</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Java</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Flutter</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Option Trader</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Adobe Photoshop</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Android Studio</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Visual Studio Code</h4>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience