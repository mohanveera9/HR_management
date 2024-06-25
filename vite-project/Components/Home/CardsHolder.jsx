// App.js
import React from 'react';
import Card from './Card';
import './Card.css';  // Ensure this is the correct import
import './CardHolder.css';

const cardData = [
  { title: 'Jobs for Freshers', image: './photoes/JobsforFreshers.png', trending: 1, link: '/jobs-for-freshers' },
  { title: 'Work from home Jobs', image: './photoes/WorkfromHome.png', trending: 2, link: '/work-from-home-jobs' },
  { title: 'Part time Jobs', image: './photoes/WFH2.png', trending: 3, link: '/part-time-jobs' },
  { title: 'Jobs for Women', image: './photoes/PartTime.png', trending: 4, link: '/jobs-for-women' },
  { title: 'International Jobs', image: './photoes/Employer.png', trending: 5, link: '/international-jobs' },
];

const CardHolder = () => {
  return (
    <div className="app">
      <h1>Popular Searches</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardHolder;
