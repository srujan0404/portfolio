import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.png'
import IMG2 from '../../assets/img2.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Youtube Clone</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/srujan0404/ytclone_webD" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Ai SaaS Application</h3>
            <small className='text-light'>Next Js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/srujan0404/ssTAi" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>SnapGram (Social Application)</h3>
            <small className='text-light'>ReactJs | Appwrite</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/srujan0404/snapgram" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
        </article>
      </div>
    </section>
  )
}

export default Myprojects