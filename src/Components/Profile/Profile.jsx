import React from 'react';
import './Profile.css';
import bannerImage from '../../assets/banner_prefinal_one.png';
import cvFile from '../../assets/Pranav_Mhargude.pdf';
import pranav_profile from '../../assets/pranav_profile.jpeg';

const Profile = () => {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Pranav_Mhargude.pdf'; // Change the filename as needed
    link.click();
  };

  const redirectToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/pranav-mhargude-58b366234/';
  };

  return (
    <div className="profile" style={{ marginTop: '20px' }} id='profile'>
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="profile-info"> 
          <h2>Pranav Mhargude</h2>
          <p>pranavmhargude@gmail.com</p>
          <button className="profile-btn" onClick={downloadCV}>Download CV</button>
        </div>
        <div className="profile-pic-container">
          <img src={pranav_profile} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default Profile;



