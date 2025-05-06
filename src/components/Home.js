import React from 'react';
import './Home.css';
import galaxyImage from './images/galaxy.jpg';
import desktopImage from './images/Desktopapp.png';
import webImage from './images/Webapp.png';
import mobileImage from './images/Mobileapp.png';
import cloudImage from './images/Cloudapp.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Kew Company</h1>
      <div className="hero-section">
        <img src={galaxyImage} alt="Galaxy" className="hero-image" />
        <div className="hero-text">
          <p>We are an experienced team of developers from Vietnam who are passionate about beautiful and simple web solutions</p>
          <p>We apply creative technology to meet customer needs and solve complex business challenges</p>
        </div>
      </div>
      <div className="content">
        <h1>What we do</h1>
        <ul>
          <li><img src={desktopImage} /><Link to="/services/desktop">Desktop Application Development</Link></li>
          <li><img src={webImage} /><Link to="/services/web">Web Application Development</Link></li>
          <li><img src={mobileImage} /><Link to="/services/mobile">Mobile Application Development</Link></li>
          <li><img src={cloudImage} /><Link to="/services/cloud">Cloud Application Development</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;