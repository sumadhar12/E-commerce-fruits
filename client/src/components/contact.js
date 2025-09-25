import React from 'react';
import './contact.css';
import contactImage from '../assets/contact-image.png';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="blob"></div>

      <div className="contact-glass">
        <div className="form-section">
          <h2>Let's Get in Touch</h2>
          <p>Have a question or just want to say hi? We'd love to hear from you.</p>
          <form className="glass-form">
            <div className="input-group">
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <textarea rows="4" required></textarea>
              <label>Message</label>
            </div>
            <button type="submit" className="fruit-button">🍉 Send Message</button>
          </form>
        </div>
        <div className="image-section">
          <img src={contactImage} alt="Dragon Fruit" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
