// JobRoleCard.js
import React from 'react';
import './JobListCard.css';

const JobListCard = ({ role, openings }) => {
  return (
    <div className="job-role-card">
      <div className="job-role-card-body">
        <h3>{role}</h3>
        <p>{openings} openings</p>
        <a href="#" className="view-jobs">View jobs</a>
      </div>
    </div>
  );
};

export default JobListCard;
