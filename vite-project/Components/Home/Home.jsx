import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text-content">
          <h2>INDIA'S #1 JOB PLATFORM</h2>
          <h1>Your job search ends here</h1>
          <p className="tagline">Discover 50 lakh+ career opportunities</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for jobs..." />
            <button>Search Jobs</button>
          </div>
        </div>
        <div className="image-content">
          <img src="your-image-url.jpg" alt="Job Search" />
        </div>
      </div>
    </div>
  );
};

export default Home;
