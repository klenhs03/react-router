import React from 'react';
import flutterImage from '../images/flutter.png';
import githubImage from '../images/github.png';
import uiuxImage from '../images/uiux.jpg';
import './ServiceApp.css';

function MobileApp() {
  return (
    <div className='service-app'>
        <h1>Mobile Application Development</h1>
        <p>We are a leading mobile app development company, offering high-quality and 
          reliable app development services at competitive costs. We offer end-to-end services, 
          including requirements engineering, UX/UI design, development, performance testing, 
          production deployment, and post-launch maintenance and operations.</p>
        <div className="tech-stack">
            <h2>Technology Stack</h2>
            <ul>
                <li>
                    <img src={flutterImage} alt="Flutter" />
                    Flutter
                </li>
                <li>
                    <img src={githubImage} alt="GitHub" />
                    GitHub
                </li>
                <li>
                    <img src={uiuxImage} alt="UI/UX" />
                    UI/UX
                </li>
            </ul>
        </div>
    </div>
  );
}

export default MobileApp;
