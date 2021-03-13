import React from 'react';
import Easynav from '../components/easynav';

const Coursecontainer = () => (
  <div className="coursecontainer">
    <div className="coursecontent ">
      <h4 className="bg-info text-white text-center p-2">List of Courses</h4>
      <hr />
      <div className="course1 card border-2 mb-2 bg-warning">
        <div className="content d-flex justify-content-between align-items-center p-1">
          <p>Ruby on rails</p>
          <i className="far fa-2x fa-circle mr-2 text-primary" />
          <button type="button" className="btn btn-primary">view info</button>
        </div>
      </div>

      <div className="course1 card border-2 mb-2 bg-warning">
        <div className="content d-flex justify-content-between align-items-center p-1">
          <p>Ruby on rails</p>
          <i className="far fa-2x fa-circle mr-2 text-primary" />
          <button type="button" className="btn btn-primary">view info</button>
        </div>
      </div>

    </div>
    <Easynav />
  </div>
);

export default Coursecontainer;
