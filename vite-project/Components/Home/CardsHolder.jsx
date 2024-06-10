// App.js
import React from 'react';
import Card from './Card';
import './Card.css';

const cardData = [
  { title: 'Jobs for Freshers', image: 'path/to/image1.jpg', trending: 1, link: '/jobs-for-freshers' },
  { title: 'Work from home Jobs', image: 'path/to/image2.jpg', trending: 2, link: '/work-from-home-jobs' },
  { title: 'Part time Jobs', image: 'path/to/image3.jpg', trending: 3, link: '/part-time-jobs' },
  { title: 'Jobs for Women', image: 'path/to/image4.jpg', trending: 4, link: '/jobs-for-women' },
  { title: 'International Jobs', image: 'path/to/image5.jpg', trending: 5, link: '/international-jobs' },
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
