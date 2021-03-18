/*eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/allActions';

const Signup = ({ addUser }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history= useHistory();

  const user = JSON.parse(window.localStorage.getItem('user'));

  const handleSubmit = e => {
    e.preventDefault();
    const userinfo = {
      name,
      username,
      password,
      email,
    };
    if(name===""|| username==="" ||password==="" || email===""){
      alert("please add all the information");
    } else{
      addUser('https://shrouded-peak-00466.herokuapp.com/api/v1/users', userinfo, history);
    }
  };

  return (
    <div className="logincont">
      <div className=" bg-white mx-auto p-2 rounded signupitem">
        <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Sign up for free!</h4>
        <form onSubmit={e => { handleSubmit(e); }}>
          <div className="form-group text-left">
            <input
              onChange={e => { setName(e.target.value); }}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group text-left">
            <input
              onChange={e => { setUsername(e.target.value); }}
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group text-left">
            <input
              onChange={e => { setEmail(e.target.value); }}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
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
            Sign up
          </button>
        </form>

        <div className="signupinfo text-right">
          <p className="tagline">Already have an account?</p>
          <Link to="/login" className="nav-link m-0 bg-danger w-25 text-center text-white rounded ml-auto tagbtn">Login</Link>
        </div>

      </div>
    </div>
  );
};

Signup.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addUser: (url, obj, route) => dispatch(addUser(url, obj, route)),
});

export default connect(null, mapDispatchToProps)(Signup);
/*eslint-disable */
