import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Bsc Cs
                <br />
                <i>BITS</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>8.68</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Interests</h5>
              <small>
                <ul>
                  <li>Web development</li>
                  <li>Mobile Applications</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>CS UnderGrad</b> at BITS. I am a passionate and motivated
            Software Engineering student actively seeking an internship to apply
            and enhance my technical skills. With a solid academic background in
            software engineering and practical experience in multiple
            programming languages, I am excited to contribute to cutting-edge
            projects and learn from seasoned professionals. I am a quick
            learner, always eager to tackle new challenges and grow in the
            field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About