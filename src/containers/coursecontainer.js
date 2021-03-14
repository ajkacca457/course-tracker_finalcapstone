/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCourses } from '../redux/actions/allActions';
import Easynav from '../components/easynav';
import Course from '../components/course';
import Loading from '../components/loading';

const Coursecontainer = ({
  loading, courses, fetchCourses,
}) => {
  useEffect(() => {
    fetchCourses('https://shrouded-peak-00466.herokuapp.com/api/v1/courses');
  }, []);

  console.log(courses.courses);

  if (loading) {
    return (<Loading />);
  } if (courses.courses) {
    return (
      <div className="coursecontainer">
        <div className="coursecontent ">
          <h4 className="bg-info text-white text-center p-2">List of Courses</h4>
          <hr />
          {courses.courses.length === 0 ? <div className="text-white rounded"><h4>Your search doesnt match with any show here.</h4></div> : courses.courses.map(item => (
            <Course key={item.id} course={item} />))}
          <Easynav />
        </div>
      </div>
    );
  }
};

Coursecontainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  courses: PropTypes.object.isRequired,
  fetchCourses: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    loading: state.courses.loading,
    courses: state.courses.courses,
  });

const mapDispatchToProps = dispatch => ({
  fetchCourses: url => dispatch(fetchCourses(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Coursecontainer);
