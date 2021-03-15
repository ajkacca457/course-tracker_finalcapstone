import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Easynav from '../components/easynav';

const Progress = () => {
  const courses = JSON.parse(window.localStorage.getItem('courses'));
  // number of courses
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

  return (
    <div className="progress-cont">

      <h4>Progress report</h4>
      <hr />
      <div className="reportbar">
        <p>Progress Score:</p>
        <CircularProgressbar
          value={progressscore.toFixed()}
          text={`${progressscore.toFixed()}%`}
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
          text={`${timescore.toFixed()}%`}
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
};

export default Progress;
