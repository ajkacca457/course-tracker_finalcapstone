/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */

import React from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Easynav from './easynav';

const Singlecourse = () => {
  const courses = JSON.parse(window.localStorage.getItem('courses'));
  const { id } = useParams();
  const course = courses.courses.filter(item => Number(id) === item.id);
  const percentcom = (course[0].lesson_completed / course[0].number_of_lessons) * 100;
  const percentrem = 100 - ((course[0].lesson_completed / course[0].number_of_lessons) * 100);
  const createdat = new Date(course[0].created_at);
  const day = createdat.getDate();
  const month = createdat.getMonth();
  const year = createdat.getFullYear();
  const date = `${day}/${month}/${year}`;
  return (
    <div className="courseinfo">
      <div className="alldetail">
        <div className="infocontent text-center rounded">
          <h3>{course[0].name}</h3>
          <p className="text-secondary">
            {' '}
            course created at:
            {date}
          </p>
          <hr />
          <div className="percentinfo w-75 d-flex justify-content-between m-auto">
            <div className="percentcomplete p-2 text-white rounded">

              <CircularProgressbar
                value={percentcom.toFixed()}
                text={`${percentcom.toFixed()}%`}
                styles={buildStyles({
                // Colors
                  pathColor: 'green',
                  textColor: 'white',
                  trailColor: 'white',
                  backgroundColor: '#3e98c7',
                })}
              />
              {' '}
              <p className="pt-2">Completed</p>
            </div>
            <div className="percentremain p-2 text-white rounded">
              <CircularProgressbar
                value={percentrem.toFixed()}
                text={`${percentrem.toFixed()}%`}
                styles={buildStyles({
                  // Colors
                  pathColor: 'red',
                  textColor: 'white',
                  trailColor: 'white',
                  backgroundColor: '#3e98c7',
                })}
              />
              <p className="pt-2">Remaining</p>
            </div>
          </div>
          <hr />

          <div className="detailinfo">

            <div className="detailinfo-item bg-info text-white d-flex justify-content-center py-2 mb-2">
              <i className="fas fa-2x fa-book mr-3" />
              <h4>
                Total Lessons :
                {' '}
                {' '}
                {course[0].number_of_lessons}
              </h4>
            </div>

            <div className="detailinfo-item bg-info text-white d-flex justify-content-center py-2 mb-2">
              <i className="fas fa-2x fa-check-circle mr-3" />
              <h4>
                Lessons Completed :
                {' '}
                {' '}
                {course[0].lesson_completed}
              </h4>
            </div>

            <div className="detailinfo-item bg-info text-white  d-flex justify-content-center py-2 mb-2">
              <i className="fas fa-2x fa-history mr-3" />
              <h4>
                Hours Needed :
                {' '}
                {' '}
                {course[0].hours_needed}
              </h4>
            </div>

            <div className="detailinfo-item bg-info text-white  d-flex justify-content-center py-2 mb-2">
              <i className="fas fa-2x fa-hourglass-half mr-3" />
              <h4>
                Hours Spend :
                {' '}
                {' '}
                {course[0].hours_spend}
              </h4>
            </div>

          </div>
        </div>

        <div className="btncont my-2 text-center">
          <button type="button" className="btn btn-success w-75 mb-2">Update Progress</button>
          <button type="button" className="btn btn-danger w-75 mb-2">Delete Course</button>
        </div>

      </div>
      <Easynav />
    </div>

  );
};

export default Singlecourse;
