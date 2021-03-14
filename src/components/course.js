/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Course = props => {
  const {
    course: {
      name,
      number_of_lessons,
      lesson_completed,
    },
  } = props;

  const percentage = (lesson_completed / number_of_lessons) * 100;

  return (
    <div className="course">
      <div className="course-item card border-2 mb-2 bg-light">
        <div className="content justify-content-between align-items-center p-1">
          <p className="name">{name}</p>
          <div className="progresscont w-25 text-right">
            <CircularProgressbar
              value={percentage.toFixed()}
              text={`${percentage.toFixed()}%`}
              styles={buildStyles({
                // Colors
                pathColor: '#38697a',
                textColor: '#194775',
                trailColor: '#D2D2D2',
                backgroundColor: '#3e98c7',
              })}
            />
          </div>
          <button type="button" className=" bg-primary rounded border-0 text-white view-btn p-1">view info</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string,
    number_of_lessons: PropTypes.number,
    lesson_completed: PropTypes.number,
  }).isRequired,
};

export default Course;
