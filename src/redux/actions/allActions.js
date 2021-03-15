import axios from 'axios';
import {
  FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE,
} from './type';

export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST,
});

export const fetchCoursesSuccess = courses => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCoursesFaluire = error => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

export const fetchCourses = url => (dispatch => {
  dispatch(fetchCoursesRequest());
  axios.get(url)
    .then(response => {
      const courses = response.data;
      dispatch(fetchCoursesSuccess(courses));
      window.localStorage.setItem('courses', JSON.stringify(courses));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchCoursesFaluire(errorMsg));
    });
});
