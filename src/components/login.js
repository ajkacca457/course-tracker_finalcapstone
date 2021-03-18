/*eslint-disable */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/allActions'

const Login = ({loginUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history= useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const userinfo = {
      username,
      password
    };
    if( username==="" ||password===""){
      alert("please enter userinfo");
    } else{
      loginUser('https://shrouded-peak-00466.herokuapp.com/api/v1/login', userinfo, history);
    }
  };


  return(
  <div className="logincont">
    <div className="bg-white mx-auto p-2 rounded loginitem">
      <h5 className="text-center bg-info py-2 text-white mb-3 rounded">Login with email and password</h5>
      <form onSubmit={e => { handleSubmit(e); }}>
        <div className="form-group text-left">
          <input
            onChange={e => { setUsername(e.target.value); }}
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group text-left">
          <input
            onChange={e => { setPassword(e.target.value); }}
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
      <div className="signupinfo text-right">
        <p className="tagline">Dont have an account?</p>
        <Link to="/signup" className="nav-link m-0 bg-danger w-25 ml-auto text-center text-white tagbtn">Signup</Link>
      </div>
    </div>
  </div>
)};


Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginUser: (url, obj, route) => dispatch(loginUser(url, obj, route)),
});

export default connect(null, mapDispatchToProps)(Login);
/* eslint-enable */
