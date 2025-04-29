import React, { useState } from 'react';
import './Contact.css';
import runningIcon from './images/running-icon.png';
import phoneIcon from './images/phone-icon.png';
import locationIcon from './images/location-icon.png';

const status = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  showMessage: false,
}

function Contact() {  
  const [submissionStatus, setSubmissionStatus] = useState(status);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      name: formData.get('name'),
      message: formData.get('message'),
    };
  
    try {
      const response = await fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert('Your message has been sent successfully!');
        event.target.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form-section">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email address"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
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