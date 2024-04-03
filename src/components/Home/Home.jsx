import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import '../Footer';

const Home = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div className="home-container">
       <header className="header">
        <h1>Welcome to School Management Portal</h1>
        <nav className="navbar">
          <div className="side-button" onClick={toggleNavLinks}>
            &#9776; {/* Hamburger icon */}
          </div>
          <ul className={`nav-links ${showNavLinks ? 'show' : ''}`}>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div className="video-section">
          {/* Your video section content */}
          <video className="background-video" autoPlay loop muted>
            <source src="https://videos.pexels.com/video-files/1580505/1580505-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="additional-info">
          <h2>Why Choose Our School Management System?</h2>
          <p>Here are some reasons why schools choose our management system:</p>
          <ul>
            <li>Comprehensive student and staff management</li>
            <li>Efficient scheduling and attendance tracking</li>
            <li>Integrated grading and report card generation</li>
            <li>Easy communication with parents and guardians</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
