import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
      <a className="navbar-brand text-white" href="google.com">Course Tracker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/home" className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link text-white">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link text-white">Signup</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="google.com">Add course</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
