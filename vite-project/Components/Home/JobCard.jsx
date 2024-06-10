
import React from 'react';
import './JobCard.css';

const JobCard = ({ company, description, imageUrl, link }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <img src={imageUrl} alt={`${company} logo`} />
      </div>
      <div className="job-card-body">
        <h3>{company}</h3>
        <p>{description}</p>
        <a href={link} className="view-jobs">View jobs</a>
      </div>
    </div>
  );
};

export default JobCard;
