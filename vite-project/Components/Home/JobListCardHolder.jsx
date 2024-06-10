// App.js
import React, { useEffect, useState } from 'react';
import JobListCard from './JobListCard';
import './JobListCard.css';

const JobListCardHolder = () => {
  const [jobRoles, setJobRoles] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/jobroles')
      .then(response => response.json())
      .then(data => setJobRoles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <h1>Trending job roles on Apna</h1>
      <div className="job-role-card-container">
        {jobRoles.map((job, index) => (
          <JobListCard key={index} role={job.role} openings={job.openings} />
        ))}
      </div>
      <div className="view-all">
        <a href="#" className="view-all-button">View all</a>
      </div>
    </div>
  );
};

export default JobListCardHolder;
