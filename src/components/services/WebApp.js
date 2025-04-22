import React from 'react';
import nodejsImage from '../images/nodejs.png';
import githubImage from '../images/github.png';
import uiuxImage from '../images/uiux.jpg';
import './ServiceApp.css';

function WebApp() {
  return (
    <div className='service-app'>
        <h1>Web Application Development</h1>
        <p>Web portal development is a proven way to provide your audience with a unified digital experience.
          A web portal allows you to integrate fragmented touchpoints, services and processes in one place 
          and create easy-to-navigate personalized journeys for your customers, clients and employees.</p>
        <div className="tech-stack">
            <h2>Technology Stack</h2>
            <ul>
                <li>
                    <img src={nodejsImage} alt=".Nodejs" />
                    .NodeJS
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

export default WebApp;
