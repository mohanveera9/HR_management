import React from 'react';
import NavBar from '../Components/Home/NavBar'; // Ensure the path is correct
import Home from '../Components/Home/Home';
import CardHolder from '../Components/Home/CardsHolder';
import JobCardHolder from '../Components/Home/JobCardHolder';
import JobListCardHolder from '../Components/Home/JobListCardHolder';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <CardHolder />
      <JobCardHolder />
      <JobListCardHolder />

    </>
  );
}

export default App;
