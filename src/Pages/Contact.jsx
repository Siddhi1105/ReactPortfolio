import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">My Portfolio</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="page contact-page">
        <h1>Contact Me</h1>
        <div className="contact-grid">
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <div className="contact-label">Phone</div>
            <div className="contact-value">+91 98765 43210</div>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div className="contact-label">Email</div>
            <div className="contact-value">siddhi@example.com</div>
          </div>
          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">
              <a href="https://linkedin.com/in/siddhi-nanaware-41a4ba281" target="_blank" rel="noreferrer">
                linkedin.com/in/siddhi-nanaware
              </a>
            </div>
          </div>
          <div className="contact-card">
            <FaGithub className="contact-icon" />
            <div className="contact-label">GitHub</div>
            <div className="contact-value">
              <a href="https://github.com/siddhinanaware" target="_blank" rel="noreferrer">
                github.com/siddhinanaware
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
