import React, { useState } from "react";
import "./Sidebar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { ImTextColor } from "react-icons/im";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleSection = (section) => {
    setActive(active === section ? "" : section);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    setShowOverlay(!collapsed); // Toggle overlay only when collapsing the sidebar
  };

  const closeSidebar = () => {
    setCollapsed(true);
    setShowOverlay(false);
  };

  const openSidebar = () => {
    setCollapsed(false);
    setShowOverlay(true);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth"
      });
      closeSidebar(); // Close the sidebar after scrolling
    }
  };

  const scrollToProfile = () => {
    const profileSection = document.getElementById('profile');
    if (profileSection) {
      window.scrollTo({
        top: profileSection.offsetTop,
        behavior: "smooth"
      });
      closeSidebar(); // Close the sidebar after scrolling
    }
  };

  const scrollToAbout = () => {
    const profileSection = document.getElementById('about');
    if (profileSection) {
      window.scrollTo({
        top: profileSection.offsetTop,
        behavior: "smooth"
      });
      closeSidebar(); // Close the sidebar after scrolling
    }
  };

  const scrollToCertificates = () => {
    const profileSection = document.getElementById('certificates');
    if (profileSection) {
      window.scrollTo({
        top: profileSection.offsetTop,
        behavior: "smooth"
      });
      closeSidebar(); // Close the sidebar after scrolling
    }
  };

  return (
    <>
      {showOverlay && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="profile-section">
          <div style={{ backgroundColor: "transparent" }}>
            <h4 style={{ backgroundColor: "transparent" }}>
              Java Full Stack Developer
            </h4>
            <br></br>
            <p style={{ backgroundColor: "transparent" }}>Software Developer</p>
          </div>
        </div>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <i
            className={`fas ${
              collapsed ? "fa-chevron-right" : "fa-chevron-left"
            }`}
            style={{ backgroundColor: "transparent" }}
          ></i>
        </div>
        <div className={`sidebar-item ${active === "home" ? "active" : ""}`} onClick={scrollToProfile}>
          <i className="fas fa-home"></i> <span>Home</span>
          {collapsed && <div className="tooltip">Home</div>}
        </div>
       {/* Add other sidebar items here */}
       <a href="https://github.com/p18an1v" target="_blank" rel="noopener noreferrer" className="sidebar-social-item">
          <i className="fab fa-github"></i> <span>Github</span>
          {collapsed && <div className="tooltip">Github</div>}
        </a>
        <a href="https://www.linkedin.com/in/pranav-mhargude-58b366234/" target="_blank" rel="noopener noreferrer" className="sidebar-social-item">
          <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
          {collapsed && <div className="tooltip">LinkedIn</div>}
        </a>
        <div className="sidebar-social-item" onClick={scrollToAbout}>
          <i className="fa-solid fa-user"></i> <span>About Me</span>
          {collapsed && <div className="tooltip">About Me</div>}
        </div>
        <div className="sidebar-social-item" onClick={scrollToCertificates}>
          <i className="fa-solid fa-certificate"></i> <span>Certificates</span>
          {collapsed && <div className="tooltip">Certificates</div>}
        </div>
        <div className="sidebar-social-item" onClick={scrollToContact}>
          <i className="fa fa-envelope"></i> <span>Contact</span>
          {collapsed && <div className="tooltip">Contact</div>}
        </div>

        {/* Add other sidebar items here */}
      </div>
      {/* Render open sidebar button only when sidebar is collapsed and overlay is not showing */}
      {collapsed && !showOverlay && (
        <button className="open-sidebar-button" onClick={openSidebar}>
          <i className="fas fa-bars"></i>
        </button>
      )}
    </>
  );
};

export default Sidebar;
