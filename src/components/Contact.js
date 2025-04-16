import React from 'react';
import './Contact.css';
import galaxyImage from './images/galaxy.jpg'; // Sử dụng galaxy.jpg

function Contact() {
  return (
    <div className="contact-container">
      <h1>Liên hệ</h1>
      <div className="content-row">
        <div className="text-content">
          <p>Liên hệ với chúng tôi!</p>
          <h2>Thông tin liên lạc</h2>
          <ul>
            <li>Email: kimkhanh151003@gmail.com</li>
            <li>Điện thoại: 0376117757</li>
            <li>Địa chỉ: 123 Tố Hữu, Quận Thuận hoá, TP.Huế</li>
          </ul>
        </div>
        <img src={galaxyImage} alt="Galaxy" className="page-image" />
      </div>
    </div>
  );
}

export default Contact;