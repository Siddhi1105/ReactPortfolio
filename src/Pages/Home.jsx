import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 
import PImage from '../Image/Profile.jpg'

function Home() {
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
      <section className="container">
        <div className="hero-left">
          <span className="tagline">SIDDHI NANANWARE</span>
          <h1>HEY! I'M SIDDHI</h1>
          <h2  className="animated-text">I'M A <span className="animated-text"> WEB DEVELOPER </span></h2>
          <p>
            I’m passionate about building web apps, solving problems, and creating interactive user experiences that deliver value.
          </p>
          <div className="hero-buttons">
            <button className="cta-btn">GET IN TOUCH →</button>
            <div className="socials">

  
          <Link to="https://www.linkedin.com/in/siddhi-nanaware-41a4ba281/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
         <i className="fab fa-linkedin-in"></i>
         </Link>
         </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={PImage} alt="Profile" />
        </div>
      </section>
      <section className="my-work">
        <h2>My Work</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Food Zone Clone</h3>
            <p>React-based online food ordering application.</p>
            <Link to="https://foodzoneclone.netlify.app/" className="arrow-link">View →</Link>
          </div>
          <div className="project-card">
            <h3>Fashion Store</h3>
            <p>Built Fashion Store in React to improve UI skills and practice routing with a real-world layout.</p>
            <Link to="https://fashionstoreclone.netlify.app/" className="arrow-link">View →</Link>
          </div>
          <div className="project-card">
            <h3>Facebook Clone</h3>
            <p>A simple Facebook UI clone made using HTML and CSS to practice layout and styling skills.</p>
            <Link to="https://your-live-link-facebook-ui.netlify.app" className="arrow-link">View →</Link>
          </div>
        </div>
      </section>

      
</div>
  );
};

export default Home;
