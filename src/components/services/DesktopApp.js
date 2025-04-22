import React from 'react';
import netImage from '../images/net.png';
import githubImage from '../images/github.png';
import uiuxImage from '../images/uiux.jpg';
import './ServiceApp.css';

function DesktopApp() {
  return (
    <div className='service-app'>
        <h1>Desktop Application Development</h1>
        <p>To develop a system that caters to the specific needs of performing business operations, 
        processes, or existing niche markets of our clients, we will construct a system tailored 
        specifically for your enterprise with seamless services ranging from requirement analysis to design, 
        development, testing, and implementation.</p>
        <div className="tech-stack">
            <h2>Technology Stack</h2>
            <ul>
                <li>
                    <img src={netImage} alt=".NET" />
                    .NET
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

export default DesktopApp;
