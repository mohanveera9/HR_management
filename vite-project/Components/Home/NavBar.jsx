import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/career-compass">Career Compass</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/community">Training Program</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li className="employe"><Link to="/hr-login">Recruiter Login</Link></li>
          <li className="candidate"><Link to="/employee-login">Contractor Login</Link></li>
          <li className="employe"><Link to="/hr-login">Candidate Login</Link></li>
        </ul>
      </div>
      <button 
        className="navbar-toggle" 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>
  );
};

export default NavBar;
