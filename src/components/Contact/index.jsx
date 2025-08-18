import React, { useState } from 'react';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section fade-in">
      <h2>Get In Touch</h2>
      <p>I'm always interested in new opportunities and exciting projects. Let's connect!</p>
      
      <div className="grid grid-2">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <strong>Email:</strong>
            <a href="mailto:sundus@example.com">sundus@example.com</a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/sundusmushtaq" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/sundusmushtaq
            </a>
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong>
            <a href="https://github.com/sundusmushtaq" target="_blank" rel="noopener noreferrer">
              github.com/sundusmushtaq
            </a>
          </div>
          <div className="contact-item">
            <strong>Location:</strong>
            <span>San Francisco, CA</span>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 