import React from 'react';
import PropTypes from 'prop-types';

const Course = props => {
  const {
    course: {
      name,
    },
  } = props;
  return (
    <div className="course">
      <div className="course1 card border-2 mb-2 bg-warning">
        <div className="content d-flex justify-content-between align-items-center p-1">
          <p className="flex-1">{name}</p>
          <i className="far fa-2x fa-circle mr-2 text-primary text-center flex-1" />
          <button type="button" className="btn btn-primary flex-1">view info</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Course;
