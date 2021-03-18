/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { connect } from 'react-redux';
import { fetchCourses } from '../redux/actions/allActions';
import Easynav from '../components/easynav';
import Loading from '../components/loading';

const Progress = ({ loading, courses, fetchCourses }) => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const { token } = user.data;

  useEffect(() => {
    fetchCourses('https://shrouded-peak-00466.herokuapp.com/api/v1/courses', token);
  }, []);

  const totalcourses = courses.courses.length;
  // number of lessons
  const tlessons = courses.courses.map(item => item.number_of_lessons);
  const totallessons = tlessons.reduce((sum, lessons) => sum + lessons, 0);
  // number of finished lessons
  const flessons = courses.courses.map(item => item.lesson_completed);
  const finishedlessons = flessons.reduce((sum, lessons) => sum + lessons, 0);
  // number of hours
  const thours = courses.courses.map(item => item.hours_needed);
  const totalhours = thours.reduce((sum, lessons) => sum + lessons, 0);
  // number of hours
  const shours = courses.courses.map(item => item.hours_spend);
  const spendhours = shours.reduce((sum, lessons) => sum + lessons, 0);
  // Final scores
  const progressscore = (finishedlessons / totallessons) * 100;
  const timescore = (spendhours / totalhours) * 100;

  if (loading) {
    return (<Loading />);
  }
  if (courses.courses) {
    return (
      <div className="progress-cont">

        <h4>Progress report</h4>
        <hr />
        <div className="reportbar">
          <p>Progress Score:</p>
          <CircularProgressbar
            value={progressscore.toFixed()}
            text={`${progressscore.toFixed().isNaN ? 0 : progressscore.toFixed()}%`}
            styles={buildStyles({
              // Colors
              pathColor: 'orangered',
              textColor: 'black',
              trailColor: '#D3D3D3',
              backgroundColor: '#3e98c7',
            })}
          />
          <p className="mt-2">Time management score:</p>
          <CircularProgressbar
            value={timescore.toFixed()}
            text={`${timescore.toFixed().isNaN ? 0 : timescore.toFixed()}%`}
            styles={buildStyles({
              // Colors
              pathColor: 'orange',
              textColor: 'black',
              trailColor: '#D3D3D3',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <hr />
        <h5 className="bg-warning py-1 w-50 mx-auto">Course statistics</h5>
        <div className="coursestatus bg-info text-white py-1">
          <h4>
            Courses Taken :
            {' '}
            {' '}
            {totalcourses}
          </h4>
          <hr />
          <h4>
            Total Lessons :
            {' '}
            {' '}
            {totallessons}
          </h4>
          <hr />
          <h4>
            Lessons completed :
            {' '}
            {' '}
            {finishedlessons}
          </h4>
        </div>
        <hr />
        <h5 className="bg-warning py-1 w-50 mx-auto">Time statistics</h5>
        <div className="hoursstatus bg-info text-white py-1">
          <h4>
            Total Hours :
            {' '}
            {totalhours}
          </h4>
          <hr />
          <h4>
            Hours spent :
            {' '}
            {spendhours}
          </h4>
        </div>

        <Easynav />
      </div>

    );
  }
};

Progress.propTypes = {
  loading: PropTypes.bool.isRequired,
  courses: PropTypes.object.isRequired,
  fetchCourses: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    loading: state.courses.loading,
    courses: state.courses.courses,
  });

const mapDispatchToProps = dispatch => ({
  fetchCourses: (url, token) => dispatch(fetchCourses(url, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
