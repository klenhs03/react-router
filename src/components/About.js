import React from 'react';
import './About.css';
import galaxyImage from './images/galaxy.jpg'; // Sử dụng galaxy.jpg

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="content-row">
        <img src={galaxyImage} alt="Galaxy" className="page-image" />
        <div className="text-content">
        <p>
          We are a web application development team, specializing in building modern solutions with React.
        </p>
        <h2>Our Mission</h2>
        <p>
          To deliver an exceptional user experience through fast, beautiful, and user-friendly web applications.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;