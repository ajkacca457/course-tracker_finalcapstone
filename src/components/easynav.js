import React from 'react';
import { Link } from 'react-router-dom';

const Easynav = () => (
  <div className="easynav">
    <div className="navcont text-white bg-dark">

      <div className="nav-item-easy">
        <Link to="/home" className="text-white">
          <i className="fas fa-home" />
          <p>Home</p>
        </Link>
      </div>

      <div className="nav-item-easy">
        <Link to="/addcourse" className="text-white">
          <i className="fas fa-plus-circle" />
          <p>Add Course</p>
        </Link>

      </div>
      <div className="nav-item-easy">
        <Link to="/courses" className="text-white">
          <i className="fas fa-chart-line" />
          <p>Track</p>
        </Link>
      </div>

      <div className="nav-item-easy">
        <Link to="/courseinfo" className="text-white">
          <i className="fas fa-chart-pie" />
          <p>Report</p>
        </Link>
      </div>

    </div>

  </div>
);

export default Easynav;
