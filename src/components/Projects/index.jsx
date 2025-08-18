import React from 'react';
import './index.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      link: '#',
      github: '#',
      image: '/images/project-ecommerce.jpg'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      link: '#',
      github: '#',
      image: '/images/project-taskmanager.jpg'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current weather and forecasts using OpenWeatherMap API with beautiful UI animations.',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'API Integration'],
      link: '#',
      github: '#',
      image: '/images/project-weather.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite, featuring smooth animations and mobile-first design.',
      technologies: ['React', 'Vite', 'CSS3', 'Responsive Design'],
      link: '#',
      github: '#',
      image: '/images/project-portfolio.jpg'
    }
  ];

  return (
    <section id="projects" className="section slide-in-right">
      <h2>Featured Projects</h2>
      <p>Here are some of the projects I've worked on that showcase my skills and passion for development.</p>
      
      <div className="grid grid-2">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="project-image-placeholder">
                <span className="project-icon">💻</span>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="skill-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} className="btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.github} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 
 