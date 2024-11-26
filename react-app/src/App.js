import React from 'react';
import './App.css';
import profilePic from './assets/profile.jpg'; 
import reactLogo from './assets/react-logo.png'; 
import jsLogo from './assets/js-logo.png'; 

function App() {
  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hi, I'm Luka Eremeishvili</h1>
        <p>Web Developer | React Enthusiast</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-logos">
          <img src={reactLogo} alt="React Logo" />
          <img src={jsLogo} alt="JavaScript Logo" />

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit.</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-item">
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit.</p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <p>© 2024 Luka Eremeishvili. All Rights Reserved.</p>
        <p>Email: lukaeremeishvili06@gmail.com | LinkedIn: <a href="#">Linked In</a></p>
      </footer>
    </div>
  );
}

export default App;
