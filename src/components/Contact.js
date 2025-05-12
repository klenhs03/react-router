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
          <p>Kew Company<br />Thuan Hoa District, Hue City, Vietnam</p>
        </div>
        <div className="info-card">
          <h2>OUR LOCATION ON MAP</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.8883598422847!2d107.5901389!3d16.4591389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI3JzMyLjkiTiAxMDfCsDM1JzI0LjUiRQ!5e0!3m2!1sen!2s!4v1698765432109!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;