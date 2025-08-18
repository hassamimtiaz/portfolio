import React from 'react';
import './index.css';

const About = () => {
  const corePrinciples = [
    {
      title: 'Continuous Learning',
      icon: '📚',
      description: 'Always staying updated with the latest technologies and industry trends to deliver cutting-edge solutions.',
      details: 'Regular participation in tech conferences, online courses, and contributing to open-source projects.'
    },
    {
      title: 'User-Centric Design',
      icon: '🎯',
      description: 'Putting users first in every decision, ensuring intuitive and accessible experiences.',
      details: 'Conducting user research, usability testing, and iterative design improvements.'
    },
    {
      title: 'Code Quality',
      icon: '✨',
      description: 'Writing clean, maintainable, and scalable code that stands the test of time.',
      details: 'Following best practices, code reviews, and maintaining comprehensive documentation.'
    },
    {
      title: 'Collaboration',
      icon: '🤝',
      description: 'Fostering strong team dynamics and effective communication across all stakeholders.',
      details: 'Leading cross-functional teams, mentoring junior developers, and promoting knowledge sharing.'
    },
    {
      title: 'Innovation',
      icon: '🚀',
      description: 'Embracing new technologies and creative solutions to solve complex problems.',
      details: 'Experimenting with emerging tech, prototyping new ideas, and pushing technical boundaries.'
    },
    {
      title: 'Reliability',
      icon: '🛡️',
      description: 'Building robust systems that users can depend on, with comprehensive testing and monitoring.',
      details: 'Implementing automated testing, error handling, and performance optimization strategies.'
    }
  ];

  return (
    <section id="about" className="section fade-in">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <div className="about-section">
            <h3>The Foundation</h3>
            <p>
              My journey in technology began with a deep curiosity about how things work. Growing up in a world where technology was rapidly evolving, I developed a passion for understanding the underlying principles of software development. This foundation was built on a strong academic background in computer science, where I learned not just how to code, but how to think systematically about complex problems.
            </p>
          </div>

          <div className="about-section">
            <h3>Career Beginning</h3>
            <p>
              I started my professional journey as a junior developer, eager to apply my theoretical knowledge to real-world challenges. My first role taught me the importance of writing clean, maintainable code and working effectively within a team. I quickly learned that success in software development isn't just about technical skills—it's about understanding business requirements, collaborating with stakeholders, and delivering value to users.
            </p>
          </div>

          <div className="about-section">
            <h3>International Experience</h3>
            <p>
              Working with diverse teams across different countries and cultures has been one of the most enriching experiences of my career. This international exposure has taught me to adapt quickly to different working styles, communicate effectively across language barriers, and appreciate the value of diverse perspectives in problem-solving. I've had the privilege of collaborating with talented developers from various backgrounds, which has broadened my technical and cultural horizons.
            </p>
          </div>

          <div className="about-section">
            <h3>Current Focus</h3>
            <p>
              Today, I'm focused on leading development teams and architecting scalable solutions that can handle the demands of modern applications. My current role involves mentoring junior developers, making strategic technical decisions, and ensuring that our development processes are efficient and sustainable. I'm particularly passionate about cloud-native architectures, microservices, and building systems that can scale with business growth.
            </p>
          </div>

          <div className="about-section">
            <h3>Core Principles</h3>
            <p>
              Throughout my career, I've developed a set of core principles that guide my approach to software development and team leadership. These principles help me make better decisions, build stronger relationships, and deliver exceptional results.
            </p>
            
            <div className="core-principles-grid">
              {corePrinciples.map((principle, index) => (
                <div key={index} className="principle-card">
                  <div className="principle-header">
                    <span className="principle-icon">{principle.icon}</span>
                    <h4>{principle.title}</h4>
                  </div>
                  <p className="principle-description">{principle.description}</p>
                  <p className="principle-details">{principle.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <div className="profile-image">
            <img 
              src="/images/profile.jpeg" 
              alt="Hassam Imtiaz - Full Stack Developer"
            />
            <span className="profile-icon">👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 