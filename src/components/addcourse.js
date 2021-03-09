import React from 'react';

const Addcourse = () => (
  <div className="logincont">
    <div className="w-50 bg-white mx-auto p-2 rounded">
      <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Add new course</h4>
      <form>
        <div className="form-group text-left">
          <input
            type="text"
            className="form-control"
            id="course-name"
            placeholder="Enter course name"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="number"
            className="form-control"
            id="numberoflessons"
            placeholder="Enter number of lessons"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="number"
            className="form-control"
            id="numberoflessons"
            placeholder="Enter number of lessons to complete"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="number"
            className="form-control"
            id="lessoncompleted"
            placeholder="Number of lessons completed"
          />
        </div>

        <div className="form-group text-left">
          <input
            type="number"
            className="form-control"
            id="hoursneeded"
            placeholder="hours needed to complete the course"
          />
        </div>

        <div className="form-group text-left">
          <input
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
  </div>
);

export default Addcourse;
