import React from 'react';
import './Skills.css';
import { FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa'; // Importing icons from react-icons library

const Skills = () => {
  const skills = {
    Frontend: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'React JS'],
    Backend: ['Java','Spring-Boot','Hibernate', 'Servlet','Jsp'],
    Database: ['MySql', 'SQL','MongoDB', 'GraphQL' ],
    Tools: ['GIT', 'GitHub','Postman','Docker','JWT']
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <FaCode />;
      case 'Backend':
        return <FaServer />;
      case 'Database':
        return <FaDatabase />;
      case 'Tools':
        return <FaTools />;
      default:
        return null;
    }
  };

  const getSkillClassName = (skill) => {
    // Adjust these thresholds as needed based on your proficiency levels
    if (skill === 'HTML' || skill === 'CSS' || skill === 'Java' || skill === 'Spring-Boot' || 
        skill === 'Hibernate' || skill === 'Hibernate' || skill === 'Hibernate' || skill === 'Hibernate' ||
        skill === 'MySql' || skill === 'SQL' || skill === 'GIT' || skill === 'GitHub' || skill === 'Postman') {
      return 'green';
    } else if (skill === 'Javascript' || skill === 'React JS' || skill === 'Node Js' || skill === 'Servlet' || skill === 'Jsp') {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <div className="skills">
      <h3>What I Know</h3>
      <div className="skills-grid">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skills-category">
            <div className="category-header">
              {getCategoryIcon(category)}
              <h4>{category}</h4>
            </div>
            <div className="skills-list">
              {skills[category].map((skill, idx) => (
                <span key={idx} className={`skill ${getSkillClassName(skill)}`}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
