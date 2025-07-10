import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg from '../Image/Profile.jpg';

function About() {
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

      <div className="about-page">
        <div className="about-container">
          <div className="about-image">
            <img src={AboutImg} alt="About Siddhi" />
          </div>

          <div className="about-text">
            <h1>About Me</h1>
            <p>
              I am a Computer Science graduate with practical experience in software development and web technologies.
              As a fresher, I’ve developed skills in JavaScript, React, HTML, CSS, Java, and SQL through academic projects and hands-on training.
            </p>
            <p>
              I’m passionate about building responsive and user-friendly web interfaces and continuously improving my frontend development abilities.
              I’m also familiar with backend basics and currently learning Spring Boot and Hibernate.
            </p>
            <p>
              I am eager to contribute to real-world projects, adapt to new technologies as needed, and grow as a UI developer in a collaborative and challenging work environment.
            </p>

            <h2>Education</h2>
            <ul className="education-list">
              <li><strong>B.Sc. Computer Science</strong> – Fergusson College</li>
              <li><strong>HSC</strong> –Sir Parshurambhau College (STate Board)</li>
              <li><strong>SSC</strong> – REnuka Swaroop (Maharashtra State Board)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;