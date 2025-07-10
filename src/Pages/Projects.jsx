import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
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

      <div className="projects-page">
        <h1 className="projects-heading">My Projects</h1>

        <div className="project-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>React-based portfolio to showcase my skills and projects.</p>
            <p>
              🔗 <a href="https://foodzoneclone.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a> | 
              💻 <a href="https://github.com/Siddhi1105/FoodZone-clone" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>

          <div className="project-card">
            <h3>Food Ordering System</h3>
            <p>A simple React web app for browsing and ordering food.</p>
            <p>
              🔗 <a href="https://fashionstoreclone.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a> | 
              💻 <a href="https://github.com/Siddhi1105/FashionStoreClone" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>


          <div className="project-card">
            <h3>Facebook UI Clone</h3>
            <p>Basic one-page UI built using HTML & CSS.</p>
            <p>
              🔗 <a href="https://your-live-link-facebook-ui.netlify.app" target="_blank" rel="noopener noreferrer">Live</a> | 
              💻 <a href="https://github.com/yourusername/facebook-ui-clone" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

