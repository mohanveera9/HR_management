// src/EmployerSection.js
import React from 'react';
import './Employer.css';
// import employerImage from './employerImage.jpg'; // Add the path to your image here

const Employer = () => {
  return (
    <div className="employer-section">
      <div className="employer-content">
        <h2>APNA FOR EMPLOYERS</h2>
        <h1>Want to hire?</h1>
        <p>Find the best candidate from 5 crore+ active job seekers!</p>
        <button className="post-job-button">Post job</button>
      </div>
      <div className="employer-image">
        {/* <img src={employerImage} alt="Employers" /> */}
      </div>
    </div>
  );
};

export default Employer;
