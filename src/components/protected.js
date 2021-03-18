import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Protected = ({ loggedin, Cmp }) => {
  console.log(loggedin);
  return loggedin ? (
    <>
      <Cmp />
    </>
  )
    : <Redirect to={{ pathname: '/login' }} />;
};

Protected.propTypes = {
  loggedin: PropTypes.bool.isRequired,
  Cmp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedin: state.user.loggedin,
});

export default connect(mapStateToProps, null)(Protected);
