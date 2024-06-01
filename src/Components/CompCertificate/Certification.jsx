// src/Certification.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Certification.css';
import java_certi from '../../assets/java_certificate.jpg';
import fullstack_certi from '../../assets/fullstack_certificate.jpg';
import javaScript_certi from '../../assets/javaScript_certificate.jpg';
import htmlcss_certi from '../../assets/HtmlCss_certificate.png';
const certifications = [
  {
    id: 1,
    title: "Java Full Stack Developer Certification",
    organization: "Linkcode Technology",
    date: "June 2023",
    imageUrl: fullstack_certi
  },
  {
    id: 2,
    title: "JavaScript",
    organization: "Let Up Grade",
    date: "January 2023",
    imageUrl: javaScript_certi
  },
  {
    id: 3,
    title: "Responsive Web Design",
    organization: "FreeCodeCamp",
    date: "October 2023",
    imageUrl: htmlcss_certi
  },
  {
    id: 4,
    title: "Java Basic",
    organization: "HackerRank",
    date: "October 2023",
    imageUrl: java_certi
  },
  // Add more certifications as needed
];

const Certification = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);

  const openModal = (cert) => {
    setCurrentCert(cert);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentCert(null);
  };

  return (
    <div className="certification-container" id='certificates'>
      <h2>Certifications</h2>
      <div className="certification-list">
        {certifications.map(cert => (
          <div key={cert.id} className="certification-item">
            <h3>{cert.title}</h3>
            <p><strong>Organization:</strong> {cert.organization}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <button onClick={() => openModal(cert)}>View Certificate</button>
          </div>
        ))}
      </div>

      {currentCert && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate Modal"
          className="cert-modal"
          overlayClassName="cert-overlay"
        >
          <h2>{currentCert.title}</h2>
          <p><strong>Organization:</strong> {currentCert.organization}</p>
          <p><strong>Date:</strong> {currentCert.date}</p>
          <img 
            src={currentCert.imageUrl} 
            alt={currentCert.title} 
            style={{ width: '100%', height: 'auto' }} 
          />
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default Certification;



