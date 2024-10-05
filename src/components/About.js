import React from 'react'
import { opentab } from '../utility';

export default function About() {
  return (
<div className="about" id="about">
    <div className="container-2">
      <div className="row">
        <div className="about-col-1">
          <img src="images/portrait.png" alt="" />
        </div>
        <div className="about-col-2">
          <h1 className="sub-title">About Me</h1>
          <p className="text2">
            I am a dedicated front-end developer with a strong passion for
            building dynamic, responsive and visually appealing websites. With
            expertise in HTML, CSS, and JavaScript, I create clean, efficient,
            and maintainable code that ensures seamless user experiences across
            different devices and browsers.
          </p>
          <div className="tab-title">
            <p className="tab-links active-link" onClick={(event) => opentab(event, 'skills')}>
              Skills
            </p>
            <p className="tab-links" onClick={(event) => opentab(event, 'education')}>
              Education
            </p>
          </div>
          <div className="tab-contents active-tab" id="skills">
            <ul>
              <li>HTML5 &amp; CSS3</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>React JS</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="tab-contents" id="education">
            <ul>
              <li>
                Graduated in BCA From IGNOU <br />
                2020-2023
              </li>
              <li>
                Accomplished 12th From CBSE Board Delhi <br />
                2019-2020
              </li>
              <li>
                Accomplished 10th From CBSE Board Delhi <br />
                2016-2017
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
