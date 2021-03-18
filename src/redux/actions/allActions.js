import axios from 'axios';
import {
  FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE, ADD_NEW_USER,
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

export const addUserSuccess = response => ({
  type: ADD_NEW_USER,
  payload: response,
});

export const fetchCourses = url => (dispatch => {
  dispatch(fetchCoursesRequest());
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxN30.IOsie39H8JzkOSuGptKc1UmBZ512Zzaz56bIxyZFRGo',
    },
  })
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

export const addUser = (url, obj, route) => (dispatch => {
  axios.post(url, obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    console.log(response);
    dispatch(addUserSuccess(response));
    window.localStorage.setItem('user', JSON.stringify(response));
    route.push('/home');
  })
    .catch(error => {
      console.log(error);
    });
});
