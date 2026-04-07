import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">VNR VJIET Portal</Link>
        
        {/* ms-auto pushes the links to the right */}
        <div className="navbar-nav ms-auto align-items-center">
          <Link className="nav-link mx-2" to="/"><FaHome className="me-1" /> Home</Link>
          <Link className="nav-link mx-2" to="/about"><FaInfoCircle className="me-1" /> About</Link>
          <Link className="nav-link mx-2" to="/contact"><FaPhoneAlt className="me-1" /> Contact</Link>
          
          <Link className="btn btn-outline-primary btn-sm ms-lg-3 me-2" to="/login">
            <FaSignInAlt className="me-1" /> Login
          </Link>
          <Link className="btn btn-primary btn-sm text-white" to="/register">
            <FaUserPlus className="me-1" /> Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;