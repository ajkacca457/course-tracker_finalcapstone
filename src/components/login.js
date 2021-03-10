import React from 'react';

const Login = () => (
  <div className="logincont">
    <div className="bg-white mx-auto p-2 rounded loginitem">
      <h5 className="text-center bg-info py-2 text-white mb-3 rounded">Login with email and password</h5>
      <form>
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

        <button
          type="submit"
          className="btn btn-info w-100"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);

export default Login;
