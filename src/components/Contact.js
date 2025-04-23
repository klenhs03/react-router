import React, { useState } from 'react';
import './Contact.css';
import runningIcon from './images/running-icon.png';
import phoneIcon from './images/phone-icon.png';
import locationIcon from './images/location-icon.png';


function Contact() {  
  const [submissionStatus, setSubmissionStatus] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    showMessage: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus({ isLoading: true, isSuccess: false, isError: false, message: '', showMessage: false});

    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      name: formData.get('name'),
      message: formData.get('message'),
    };

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setSubmissionStatus({
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: 'Your message has been sent successfully!',
                showMessage: true,
            });
        } else {
            setSubmissionStatus({
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: 'There was an error sending your message.',
                showMessage: true,
            });
        }
    } catch (error) {
        setSubmissionStatus({
            isLoading: false,
            isSuccess: false,
            isError: true,
            message: 'An unexpected error occurred.',
            showMessage: true,
        });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form-section">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter a valid email address" required />
          <input type="text" name="name" placeholder="Enter your Name" required />
          <textarea name="message" placeholder="Enter your message" required></textarea>
          {submissionStatus.showMessage && (
            <div className={submissionStatus.isSuccess ? 'success-message' : 'error-message'}>
              {submissionStatus.message}
            </div>
          )}
          <button type="submit" disabled={submissionStatus.isLoading}>
            {submissionStatus.isLoading ? 'Sending...' : 'SUBMIT'}
          </button>
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