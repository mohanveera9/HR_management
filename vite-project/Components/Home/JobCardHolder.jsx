import React from 'react';
import JobCard from './JobCard';
import './JobCardHolder.css';

const jobData = [
  {
    company: 'Bajaj Allianz Life Insurance',
    description: 'Provider of life insurance and financial services.',
    imageUrl:'./pic.jpg', // Replace with the actual path to the logo image
    link: '/bajaj-jobs',
  },
  {
    company: 'Paytm Service Pvt. Ltd.',
    description: 'Digital payment and e-commerce facilitator.',
    imageUrl: './pic.jpg', // Replace with the actual path to the logo image
    link: '/paytm-jobs',
  },
  {
    company: 'Dunzo',
    description: 'On-demand delivery service provider.',
    imageUrl: './pic.jpg', // Replace with the actual path to the logo image
    link: '/dunzo-jobs',
  },
  {
    company: 'Dunzo',
    description: 'On-demand delivery service provider.',
    imageUrl: './pic.jpg', // Replace with the actual path to the logo image
    link: '/dunzo-jobs',
  },
  {
    company: 'Dunzo',
    description: 'On-demand delivery service provider.',
    imageUrl: './pic.jpg', // Replace with the actual path to the logo image
    link: '/dunzo-jobs',
  },
  {
    company: 'Dunzo',
    description: 'On-demand delivery service provider.',
    imageUrl: './pic.jpg', // Replace with the actual path to the logo image
    link: '/dunzo-jobs',
  },
  // Add more job data as needed
];

const JobCardHolder = () => {
  return (
    <div className="app">
      <h1>Job Openings in Top Companies</h1>
      <div className="job-card-container">
        {jobData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobCardHolder;
