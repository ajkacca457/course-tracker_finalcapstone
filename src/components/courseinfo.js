import React from 'react';
import Easynav from './easynav';

const Courseinfo = () => (
  <div className="courseinfo">
    <div className="alldetail">
      <div className="infocontent text-center rounded">
        <h3>Course Name</h3>
        <hr />
        <div className="percentinfo w-75 d-flex justify-content-between m-auto">
          <div className="percentcomplete bg-info p-2 text-white rounded">
            <h1>80%</h1>
            {' '}
            <p>Completed</p>
          </div>
          <div className="percentremain bg-info p-2 text-white rounded">
            <h1>20%</h1>
            <p>Remaining</p>
          </div>
        </div>
        <hr />

        <div className="detailinfo">

          <div className="detailinfo-item bg-info text-white d-flex justify-content-center py-2 mb-2">
            <i className="fas fa-2x fa-book mr-3" />
            <h4>Total Lessons : 50</h4>
          </div>

          <div className="detailinfo-item bg-info text-white d-flex justify-content-center py-2 mb-2">
            <i className="fas fa-2x fa-check-circle mr-3" />
            <h4>Lessons Completed : 40</h4>
          </div>

          <div className="detailinfo-item bg-info text-white  d-flex justify-content-center py-2 mb-2">
            <i className="fas fa-2x fa-history mr-3" />
            <h4>Hours Needed : 150</h4>
          </div>

          <div className="detailinfo-item bg-info text-white  d-flex justify-content-center py-2 mb-2">
            <i className="fas fa-2x fa-hourglass-half mr-3" />
            <h4>Hours Spend : 90</h4>
          </div>

        </div>
      </div>

      <div className="btncont my-2 text-center">
        <button type="button" className="btn btn-success w-75 mb-2">Update Progress</button>
        <button type="button" className="btn btn-danger w-75 mb-2">Delete Course</button>
        <button type="button" className="btn btn-secondary w-75">Back</button>

      </div>

    </div>
    <Easynav />
  </div>
);

export default Courseinfo;
