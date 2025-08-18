import React from 'react';
import './index.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Hassam Imtiaz</h1>
        <p className="hero-subtitle">Full Stack Developer | Team Lead | Problem Solver</p>
        <p className="hero-description">
          I specialize in creating robust web applications, database solutions, mobile apps, and scalable cloud infrastructure while leading cross-functional teams. My approach focuses on understanding core concepts, writing clean code, and fostering collaborative environments that deliver exceptional results.
        </p>
        <div className="hero-actions">
          <button className="btn-primary hero-btn">
            <span>📧</span> Get In Touch
          </button>
          <button className="btn-primary hero-btn">
            <span>📖</span> View Resume
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="code-window">
          <div className="code-header">
            <div className="window-controls">
              <span className="control red"></span>
              <span className="control yellow"></span>
              <span className="control green"></span>
            </div>
            <div className="file-name">portfolio.ts</div>
          </div>
          <div className="code-content">
            <pre><code>{`const engineer = {
  name: 'Hassam Imtiaz',
  role: 'Full Stack Developer',
  focus: 'Team Leadership',
  skills: ['Web', 'Mobile', 'DevOps'],
  passion: 'Clean Code & Innovation'
};`}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 