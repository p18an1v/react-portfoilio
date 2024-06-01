import React from 'react';
import Card from 'react-bootstrap/Card';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <Card className="project-card h-100">
        <div className="project-card-image-container">
          <Card.Img variant="top" src={image} className="project-card-img" />
          <div className="project-card-overlay">
            <div className="project-card-button">
              View Project
            </div>
          </div>
        </div>
        <Card.Body className="project-card-body d-flex flex-column">
          <Card.Title className="project-card-title">{title}</Card.Title>
          <Card.Text className="project-card-text flex-grow-1">{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default ProjectCard;




