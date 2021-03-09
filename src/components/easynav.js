import React from 'react';

const Easynav = () => (
  <div className="easynav">
    <div className="navcont text-white bg-dark">

      <div className="nav-item-easy">
        <i className="fas fa-plus-circle" />
        <p>Add Course</p>
      </div>
      <div className="nav-item-easy">
        <i className="fas fa-chart-line" />
        <p>Track Course</p>
      </div>
      <div className="nav-item-easy">
        <i className="fas fa-chart-pie" />
        <p>Progress Report</p>
      </div>
      <div className="nav-item-easy">
        <i className="fas fa-home" />
        <p>Home</p>
      </div>

    </div>

  </div>
);

export default Easynav;
