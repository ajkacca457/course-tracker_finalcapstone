import React from 'react';

const Coursecontainer = () => (
  <div className="coursecontainer">
    <div className="coursecontent bg-light">
      <h4 className="bg-info text-white text-center p-2">List of Courses</h4>
      <hr />
      <div className="course1 card border-2 mb-2">
        <div className="content d-flex justify-content-between align-items-center p-1">
          <p>Ruby on rails</p>
          <i className="far fa-2x fa-circle mr-2 text-primary" />
          <button type="button" className="btn btn-primary">view info</button>
        </div>
      </div>

      <div className="course1 card border-2 mb-2">
        <div className="content d-flex justify-content-between align-items-center p-1">
          <p>Ruby on rails</p>
          <i className="far fa-2x fa-circle mr-2 text-primary" />
          <button type="button" className="btn btn-primary">view info</button>
        </div>
      </div>

    </div>

  </div>
);

export default Coursecontainer;
