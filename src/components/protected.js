/* eslint-disable*/
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const Protected = ({ loggedin, Cmp }) => {
  console.log(loggedin);
  console.log(Cmp);

  return loggedin? (
    <>
      <Cmp />
    </>
  )
  : <Redirect to={{ pathname: '/login' }} />;
};

Protected.propTypes = {
  loggedin: PropTypes.bool.isRequired,
  Cmp: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loggedin: state.user.loggedin,
});

export default connect(mapStateToProps, null)(Protected);
/* eslint-enable */
