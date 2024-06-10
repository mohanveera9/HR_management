import React from 'react';
import NavBar from '../Components/Home/NavBar'; // Ensure the path is correct
import Home from '../Components/Home/Home';
import CardHolder from '../Components/Home/CardsHolder';
import JobCardHolder from '../Components/Home/JobCardHolder';
import JobListCardHolder from '../Components/Home/JobListCardHolder';
import ReviewCardHolder from '../Components/Home/ReviewCardHolder';
import Employer from '../Components/Home/Employer';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <CardHolder />
      <JobCardHolder />
      <JobListCardHolder />
      <ReviewCardHolder />
      <Employer />

    </>
  );
}

export default App;
