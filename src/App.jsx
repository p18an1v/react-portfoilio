import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './Components/Profile/Profile';
// import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills'
import ProjectDetails from './Components/cardProject/ProjectsDetails';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
// import CustomNavbar from './Components/Navbar/Navbar';
import Certification from './Components/CompCertificate/Certification';


function App() {
  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Profile/>
           <ProjectDetails/>
           <Skills/>
           <Certification />
           <About/>
           <Experience/>
           <Contact/>  
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
