import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100 d-md-block d-none">
      <a className="navbar-brand text-white" href="google.com">Course Tracker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white" />
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
            <Link to="/addcourse" className="nav-link text-white">Add course</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link text-white">Courses</Link>
          </li>

          <li className="nav-item">
            <Link to="/courseinfo" className="nav-link text-white">Courseinfo</Link>
          </li>

        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
