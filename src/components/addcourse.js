import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Easynav from './easynav';

const Addcourse = () => {
  const [name, setName] = useState('');
  const [numberoflessons, setNumberoflessons] = useState('');
  const [lessoncompleted, setLessoncompleted] = useState('');
  const [hoursneed, setHoursneed] = useState('');
  const [hoursspend, setHoursspend] = useState('');
  const history = useHistory();

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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxN30.IOsie39H8JzkOSuGptKc1UmBZ512Zzaz56bIxyZFRGo',
      },
    }).then(response => {
      console.log(response);
      alert('course added successfully ');
      history.push('/courses');
    })
      .catch(error => {
        console.log(error);
        alert('course cannot be added, dont leave any field blank');
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
