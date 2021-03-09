import React from 'react';

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
            <a className="nav-link text-white" href="google.com">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="google.com">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="google.com">Sign Up</a>
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
