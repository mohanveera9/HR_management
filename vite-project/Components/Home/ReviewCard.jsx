// src/Review.js
import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ name, rating, text, imgSrc }) => {
  return (
    <div className="review-card">
      <img src={imgSrc} alt={name} className="review-img" />
      <div className="review-content">
        <h3>{name}</h3>
        <p>Rating: {rating}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
