import React from 'react';
import './index.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: '🌐',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Node.js', 'Express.js']
    },
    {
      title: 'Database & Backend',
      icon: '🗄️',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'GraphQL', 'REST APIs']
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux']
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: ['React Native', 'Flutter', 'Mobile UI/UX', 'App Store Deployment']
    }
  ];

  const softSkills = [
    'Team Leadership', 'Problem Solving', 'Communication', 
    'Project Management', 'Agile/Scrum', 'Mentoring'
  ];

  return (
    <section id="skills" className="section fade-in">
      <h2>Skills & Expertise</h2>
      <p>I've developed a comprehensive skill set through years of experience in full-stack development and team leadership.</p>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="skill-category-header">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-container">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="soft-skills-section">
        <h3>Leadership & Soft Skills</h3>
        <div className="skills-container">
          {softSkills.map((skill, index) => (
            <span key={index} className="skill-tag soft-skill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 