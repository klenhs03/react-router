import React from 'react';
import javaImage from '../images/java.png';
import pythonImage from '../images/python.png'
import githubImage from '../images/github.png';
import uiuxImage from '../images/uiux.jpg';
import './ServiceApp.css';

function CloudApp() {
  return (
    <div className='service-app'>
        <h1>Cloud Application Development</h1>
        <p>Cloud applications provide businesses speedy time to market and agility since they can be updated, 
          tested, and deployed quickly. This speed may result in cultural changes in how businesses operate.</p>
        <div className="tech-stack">
            <h2>Technology Stack</h2>
            <ul>
                <li>
                    <img src={javaImage} alt="Java" />
                    Java
                </li>
                <li>
                    <img src={pythonImage} alt="Python" />
                    Python
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

export default CloudApp;
