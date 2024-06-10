// Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, image, trending, link }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p>Trending at #{trending}</p>
      </div>
      <div className="card-body">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <a href={link}>View all</a>
      </div>
    </div>
  );
};

export default Card;
