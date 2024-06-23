// App.js
import React from 'react';
import Card from './Card';
import './Card.css';  // Ensure this is the correct import
import './CardHolder.css';

const cardData = [
  { title: 'Jobs for Freshers', image: './photoes/pic.jpg', trending: 1, link: '/jobs-for-freshers' },
  { title: 'Work from home Jobs', image: 'pic.jpg', trending: 2, link: '/work-from-home-jobs' },
  { title: 'Part time Jobs', image: 'pic.jpg', trending: 3, link: '/part-time-jobs' },
  { title: 'Jobs for Women', image: 'pic.jpg', trending: 4, link: '/jobs-for-women' },
  { title: 'International Jobs', image: 'pic.jpg', trending: 5, link: '/international-jobs' },
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
