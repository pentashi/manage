import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>We are a team of developers dedicated to creating innovative solutions for schools.</p>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
    </div>
  );
};

export default About;
