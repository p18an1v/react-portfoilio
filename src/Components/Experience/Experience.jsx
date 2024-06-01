import React from 'react';
import './Experience.css';

const NewExperience = () => {
  return (
    <div className="new-experience-container">
      <div className="new-experience-content">
        <h2>Experience</h2>
        {/* <div className="new-experience-item">
          <h3>Senior Developer Intern</h3>
          <p>Numetry Technologies</p>
          <p>March 2024 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React.js and Node.js</li>
            <li>Collaborated with cross-functional teams to deliver projects on time and within budget</li>
            <li>Participated in code reviews and provided constructive feedback to team members</li>
          </ul>
        </div> */}
        <div className="new-experience-item">
        <h3>Senior Developer Intern</h3>
          <p>Numetry Technologies</p>
          <p>March 2024 - Present</p>
          <ul>
            <li>Designed and implemented RESTful APIs using Spring-Boot, Postman and MySQL Database</li>
            <li>Integrated third-party APIs to enhance application functionality</li>
            <li>Worked closely as a Backend Developer to define project requirements and specifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewExperience;
