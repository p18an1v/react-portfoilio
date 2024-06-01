import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import img from '../../assets/Recharge_app.svg';
import weather_app from '../../assets/wether_app.jpg';
import Ehr_sys from '../../assets/Ehr_sys.jpg';
import chatgpt from '../../assets/chatgpt.jpg'
import honey_word from '../../assets/Honey word.jpg'
import Notes from '../../assets/Notes.jpg'
import map from '../../assets/mapPharma.jpg'

const projects = [
  {
    image: img,
    title: 'Recharge Web Application',
    description: 'Servle&JSP, Java, Bootstrap, HTML/CSS',
    link: 'https://github.com/your-username/'
  },
  {
    image: Ehr_sys,
    title: 'EHR System For Ambulance',
    description: 'Servle&JSP, Java, Bootstrap, HTML/CSS, Javascript, MySQL,',
    link: 'https://github.com/your-username/'
  },
  {
    image: weather_app,
    title: 'Cloud Web App',
    description: 'React js',
    link: 'https://github.com/your-username/'
  },
  {
    image: chatgpt,
    title: 'ChatGPT Project ',
    description: 'React Js',
    link: 'https://github.com/your-username/'
  },
  {
    image: map,
    title: 'Map Pharma',
    description: 'ReactJS, Spring-Boot, Bootstap, Postman, MySQL Database',
    link: 'https://github.com/your-username/'
  },
  {
    image: honey_word,
    title: 'Honey word Dectection',
    description: '',
    link: 'https://github.com/your-username/'
  },
  {
    image: Notes,
    title: ' Note-IT/ Notes-Taking Web App ',
    description: 'Java, Spring-boot, MySQL, ReactJS',
    link: 'https://github.com/your-username/'
  },
];

const ProjectDetails = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setVisibleProjects(showAll ? 4 : projects.length);
  };

  return (
    <Container>
      <h1 className="mt-4" style={{color:"whitesmoke"}}>Projects</h1>
      <Row>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </Col>
        ))}
      </Row>
      {projects.length > 4 && (
        <div className="text-center mt-4">
          <Button onClick={toggleShowAll} className="project-show-more-button">
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ProjectDetails;