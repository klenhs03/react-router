import React from 'react';
import './About.css';
import galaxyImage from './images/galaxy.jpg'; // Sử dụng galaxy.jpg

function About() {
  return (
    <div className="about-container">
      <h1>ABOUT US</h1>
      <div className="content-row">
        <img src={galaxyImage} alt="Galaxy" className="page-image" />
        <div className="text-content">
          <p>
            Chúng tôi là một nhóm phát triển ứng dụng web, chuyên xây dựng các giải pháp hiện đại với React.
          </p>
          <h2>Sứ mệnh của chúng tôi</h2>
          <p>
            Mang đến trải nghiệm người dùng tuyệt vời thông qua các ứng dụng web nhanh, đẹp và dễ sử dụng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;