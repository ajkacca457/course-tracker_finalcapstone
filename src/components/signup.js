import React from 'react';

const Signup = () => (
  <div className="logincont">
    <h4 className="bg-dark text-white text-center p-2">
      <i className="fas fa-chalkboard-teacher mr-3" />
      Course Tracker
    </h4>
    <div className=" bg-white mx-auto p-2 rounded signupitem">
      <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Sign up for free!</h4>
      <form>
        <div className="form-group text-left">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group text-left">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Confirm password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-info w-100"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>
);

export default Signup;
