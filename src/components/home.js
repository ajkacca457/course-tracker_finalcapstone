import React from 'react';
import Easynav from './easynav';

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
    <Easynav />
  </div>
);

export default Home;
