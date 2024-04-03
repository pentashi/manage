import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import '../Footer'

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <h3> Get to us using our details below</h3>
      <p>For inquiries, please email us at achapipentashi@gmail.com</p>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Us</Link>
    </div>
  );
};

export default Contact;
