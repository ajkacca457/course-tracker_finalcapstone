import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Easynav from './easynav';

const Addcourse = () => {
  const [name, setName] = useState('');
  const [numberoflessons, setNumberoflessons] = useState('');
  const [lessoncompleted, setLessoncompleted] = useState('');
  const [hoursneed, setHoursneed] = useState('');
  const [hoursspend, setHoursspend] = useState('');
  const history = useHistory();

  const user = JSON.parse(window.localStorage.getItem('user'));
  const { token } = user.data;

  const handleSubmit = e => {
    e.preventDefault();
    const courseinfo = {
      name,
      number_of_lessons: numberoflessons,
      lesson_completed: lessoncompleted,
      hours_needed: hoursneed,
      hours_spend: hoursspend,
    };

    axios.post('https://shrouded-peak-00466.herokuapp.com/api/v1/courses', courseinfo, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      toast.success(`course added successfully. status: ${response.status}`);
      history.push('/courses');
    })
      .catch(error => {
        toast.error(`course cannot be added. ${error}`);
      });
  };

  return (
    <div className="logincont">
      <div className="bg-white mx-auto p-2 rounded courseitem">
        <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Add new course</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group text-left">
            <input
              onChange={e => { setName(e.target.value); }}
              type="text"
              className="form-control"
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
              placeholder="Enter number of lessons"
            />
          </div>

          <div className="form-group text-left">
            <input
              onChange={e => { setLessoncompleted(e.target.value); }}
              type="number"
              className="form-control"
              id="lessoncompleted"
              placeholder="Number of lessons completed"
            />
          </div>

          <div className="form-group text-left">
            <input
              onChange={e => { setHoursneed(e.target.value); }}
              type="number"
              className="form-control"
              id="hoursneeded"
              placeholder="hours needed to complete the course"
            />
          </div>

          <div className="form-group text-left">
            <input
              onChange={e => { setHoursspend(e.target.value); }}
              type="number"
              className="form-control"
              id="hoursspend"
              placeholder="hours spend on the course"
            />
          </div>

          <button
            type="submit"
            className="btn btn-info w-100"
          >
            Create course
          </button>
        </form>
      </div>
      <Easynav />
    </div>
  );
};

export default Addcourse;
