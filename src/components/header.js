import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/allActions';

const Header = ({ loggedin, logOut }) => {
  const history = useHistory();

  const handlelogout = history => {
    logOut(history);
    toast.success('logout successful');
  };

  return (
    <div className="header bg-dark px-2 my-0 d-flex justify-content-between align-items-center">
      <h4 className="text-center text-white pt-1 mb-3">
        <i className="fas fa-chalkboard-teacher" />
        {' '}
        Course Tracker
      </h4>
      <button type="button" className={loggedin ? 'logout' : 'd-none'} onClick={() => { handlelogout(history); }}>
        {' '}
        <i className="fas fa-power-off text-white" />
      </button>
    </div>
  );
};

Header.propTypes = {
  loggedin: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedin: state.user.loggedin,
});

const mapDispatchToProps = dispatch => ({
  logOut: route => dispatch(logOut(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
