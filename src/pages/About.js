import React from 'react';
import '../styles/About.css';

import Headshot from '../assets/tay.jpg';
import EntourageLogo from '../assets/entourage-logo.png';
import KsBoardOfCosmo from '../assets/ks-board-of-cosmo.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Taylor Made Esthetics</h1>
        <p className="about-description">
            I am an esthetician with a passion for skincare and products. 
            With a strong background in customized facials, skin analysis,
            and product recommendation. I would love to set you up with an 
            in-person or virtual consultation to help you reach your skincare
            goals.
        </p>
      </div>
      <div>
        <hr className="horizontal-line" />
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={Headshot} alt="Headshot" />
        </div>
        <div className="about-text">
          <ul className="certifications-list">
            <li>
              <h5>KS Board of Cosmetology Certified</h5>
              <img className="ks-logo" src={KsBoardOfCosmo} alt="Kansas Board of Cosmetology Logo" />
            </li>
            <li>
              <h5>Entourage Institute of Beauty and Esthetics</h5>
              <img className="entourage-logo" src={EntourageLogo}></img>Graduated Oct. 2023
              <div className="certified-in">
                <ul>Certified in:
                  <li>Treating Melanin-Rich Skin</li>
                  <li>High Frequency Treatments</li>
                  <li>Ultrasonic Scrubber Treatments</li>
                  <li>LED Treatments</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
