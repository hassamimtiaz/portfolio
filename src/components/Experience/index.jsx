import React from 'react';
import './index.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Built responsive user interfaces and improved user experience across multiple web applications. Collaborated with design and backend teams.',
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Git']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      description: 'Developed features for a SaaS platform and learned modern development practices. Contributed to code reviews and documentation.',
      technologies: ['Python', 'Django', 'JavaScript', 'PostgreSQL']
    }
  ];

  return (
    <section id="experience" className="section slide-in-left">
      <h2>Work Experience</h2>
      <p>My professional journey in software development and web technologies.</p>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="card experience-card">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <div className="experience-meta">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
            </div>
            <p>{exp.description}</p>
            <div className="technologies">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="skill-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 