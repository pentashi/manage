import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>For inquiries, please email us at info@example.com.</p>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Us</Link>
    </div>
  );
};

export default Contact;
