/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */

import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Easynav from './easynav';

const Singlecourse = () => {
  const courses = JSON.parse(window.localStorage.getItem('courses'));
  const { id } = useParams();
  const history = useHistory();
  const course = courses.courses.filter(item => Number(id) === item.id);
  const percentcom = (course[0].lesson_completed / course[0].number_of_lessons) * 100;
  const percentrem = 100 - ((course[0].lesson_completed / course[0].number_of_lessons) * 100);
  const createdat = new Date(course[0].created_at);
  const day = createdat.getDate();
  const month = createdat.getMonth();
  const year = createdat.getFullYear();
  const date = `${day}/${month}/${year}`;
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState(course[0].name);
  const [numberoflessons, setNumberoflessons] = useState(course[0].number_of_lessons);
  const [lessoncompleted, setLessoncompleted] = useState(course[0].lesson_completed);
  const [hoursneed, setHoursneed] = useState(course[0].hours_needed);
  const [hoursspend, setHoursspend] = useState(course[0].hours_spend);
  const user = JSON.parse(window.localStorage.getItem('user'));
  const { token } = user.data;

  const handledelete = (id, token) => {
    axios.delete(`https://shrouded-peak-00466.herokuapp.com/api/v1/courses/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      toast.success(`course deleted successfully. status: ${response.status}`);
      history.push('/courses');
    })
      .catch(error => {
        toast.error(`course cannot be deleted. ${error}`);
      });
  };

  const handleupdateform = () => {
    setDisplay(true);
  };
  const handleupdatecancel = () => {
    setDisplay(false);
  };
  const handleupdatesubmit = (e, id, token) => {
    e.preventDefault();
    const courseupdateinfo = {
      name,
      number_of_lessons: numberoflessons,
      lesson_completed: lessoncompleted,
      hours_needed: hoursneed,
      hours_spend: hoursspend,
    };

    axios.put(`https://shrouded-peak-00466.herokuapp.com/api/v1/courses/${id}`, courseupdateinfo, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      history.push('/courses');
      toast.success(`course updated successfully. status: ${response.status}`);
    })
      .catch(error => {
        toast.error(`course cannot be updated. ${error}`);
      });
    setDisplay(false);
  };

  return (
    <div className="courseinfo">
      <div className={display ? 'updateformcont' : 'd-none'}>
        <div className="updateform bg-light p-2">
          <div className="headcont d-flex justify-content-between">
            <h5 className="text-center text-dark">Update Course</h5>
            <button type="button" className="cbtn" onClick={handleupdatecancel}>
              close
              <i className="fas fa-times ml-1" />
            </button>
          </div>
          <form onSubmit={e => { handleupdatesubmit(e, id, token); }}>
            <div className="form-group text-left">
              <input
                onChange={e => { setName(e.target.value); }}
                type="text"
                className="form-control"
                defaultValue={course[0].name}
                id="course-name"
                placeholder="Enter course name"
              />
            </div>
            <div className="form-group text-left">
              <input
                onChange={e => { setNumberoflessons(e.target.value); }}
                type="number"
                className="form-control"
                id="numberoflessons"
                defaultValue={course[0].number_of_lessons}
                placeholder="Enter number of lessons"
              />
            </div>

            <div className="form-group text-left">
              <input
                onChange={e => { setLessoncompleted(e.target.value); }}
                type="number"
                className="form-control"
                id="lessoncompleted"
                defaultValue={course[0].lesson_completed}
                placeholder="Number of lessons completed"
              />
            </div>

            <div className="form-group text-left">
              <input
                onChange={e => { setHoursneed(e.target.value); }}
                type="number"
                className="form-control"
                id="hoursneeded"
                defaultValue={course[0].hours_needed}
                placeholder="hours needed to complete the course"
              />
            </div>

            <div className="form-group text-left">
              <input
                onChange={e => { setHoursspend(e.target.value); }}
                type="number"
                className="form-control"
                id="hoursspend"
                defaultValue={course[0].hours_spend}
                placeholder="hours spend on the course"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

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

        <div className="btncont my-2 text-center d-flex justify-content-center">
          <button type="button" className="btn btn-success w-50 mb-2 mr-2 ubtn" onClick={handleupdateform}>Update Progress</button>
          <button type="button" className="btn btn-danger w-50 mb-2 ubtn" onClick={() => { handledelete(id, token); }}>Delete Course</button>
        </div>

      </div>
      <Easynav />
    </div>

  );
};

export default Singlecourse;
