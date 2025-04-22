// import React from 'react';
// import './Contact.css';
// import galaxyImage from './images/galaxy.jpg';

// function Contact() {
//   return (
//     <div className="contact-container">
//       <h1>CONTACT US</h1>
//       <div className="content-row">
//         <div className="text-content">
//           <p>Liên hệ với chúng tôi!</p>
//           <h2>Thông tin liên lạc</h2>
//           <ul>
//             <li>Email: kimkhanh151003@gmail.com</li>
//             <li>Điện thoại: 0376117757</li>
//             <li>Địa chỉ: 123 Tố Hữu, Quận Thuận hoá, TP.Huế</li>
//           </ul>
//         </div>
//         <div class="image">
//             <a><img src={galaxyImage} alt="Galaxy" className="page-image" /></a>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React from 'react';
import './Contact.css';
import runningIcon from './images/running-icon.png';
import phoneIcon from './images/phone-icon.png';
import locationIcon from './images/location-icon.png';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form-section">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
        <div className="contact-form">
          <input type="email" placeholder="Enter a valid email address" />
          <input type="text" placeholder="Enter your Name" />
          <button type="submit">SUBMIT</button>
        </div>
      </div>
      <div className="contact-info-section">
        <div className="info-card">
          <img src={runningIcon} alt="Running" className="info-icon" />
          <h3>ABOUT US</h3>
          <p>Running Guide<br />Workouts</p>
        </div>
        <div className="info-card">
          <img src={phoneIcon} alt="Phone" className="info-icon" />
          <h3>PHONE (LANDLINE)</h3>
          <p>+84 376117757<br />+84 376117757</p>
        </div>
        <div className="info-card">
          <img src={locationIcon} alt="Location" className="info-icon" />
          <h3>OUR OFFICE LOCATION</h3>
          <p>The Platinum Company<br />Thuan Hoa District, Hue City, Vietnam</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;