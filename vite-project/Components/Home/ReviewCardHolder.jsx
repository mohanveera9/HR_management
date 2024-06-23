// src/ReviewSection.js
import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewCardHolder.css';

const reviews = [
  {
    name: 'Shiwangi Singla',
    rating: 4.5,
    text: 'Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app.',
    imgSrc: './pic.jpg' // Replace with actual image source
  },
  {
    name: 'Jenil Ghevariya',
    rating: 4.5,
    text: 'This app is very helpful if you team is also very supportive all through every stage. It is very because there are a lot of job and I got a job interview call very qu',
    imgSrc: './pic.jpg' // Replace with actual image source
  },
  {
    name: 'Shiwangi Singla',
    rating: 4.5,
    text: 'Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app.',
    imgSrc: './pic.jpg' // Replace with actual image source
  },
 
  // Add more reviews as needed
];

const ReviewCardHolder = () => {
  return (
    <div className="review-section">
      <h2>Join the community of 5 crore satisfied job seekers...</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            text={review.text}
            imgSrc={review.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCardHolder;
