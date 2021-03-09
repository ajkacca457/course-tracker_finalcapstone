import React from 'react';

const Home = () => (
  <div className="home">
    <div className="homecontent rounded">
      <h4 className="text-center bg-info text-white p-2 rounded mb-3">
        <i className="fas fa-chalkboard-teacher" />
        {' '}
        Course Tracker
      </h4>
      <p className="text-justify">
        Course tracker allows you to track progress of the courses you are taking.
        It is an effective app to make your learning process easy.
      </p>
    </div>
  </div>
);

export default Home;
