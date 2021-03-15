import React from 'react';
import Easynav from './easynav';
import Trackerlogo from '../images/tracker.jpg';

const Home = () => (
  <div className="home">
    <h4 className="text-center bg-dark text-white p-2 mb-3">
      <i className="fas fa-chalkboard-teacher" />
      {' '}
      Course Tracker
    </h4>
    <p className="text-justify">
      Course tracker allows you to track progress of the courses you are taking.
      It is an effective app to make your learning process easy.
    </p>

    <div className="imgcont text-center bg-white py-3">
      <img src={Trackerlogo} alt="symbol for tracker" className="logo" />
      <div className="homeinfo">
        <h4 className="text-left text-dark">Using this App you can:</h4>
        <ul className="text-left text-dark">
          <li>Add new courses to your tracker.</li>
          <li>See progress of each courses.</li>
          <li>Modify and update your progress of the courses.</li>
          <li>Once you completed the course you can delete it.</li>
        </ul>
      </div>
    </div>

    <Easynav />
  </div>
);

export default Home;
