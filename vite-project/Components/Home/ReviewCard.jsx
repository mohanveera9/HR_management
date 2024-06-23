// src/ReviewCard.js
import React from 'react';
import './ReviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({ name, rating, text, imgSrc }) => {
  return (
    <div className="review-card">
      <img src={imgSrc} alt={name} className="review-img" />
      <div className="review-content">
        <div className="review-name">{name}</div>
        <div className="review-rating">
          <FontAwesomeIcon icon={faStar} style={{ color: '#f39c12' }} />
          <span>{rating}</span>
        </div>
        <div className="review-text">{text}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
