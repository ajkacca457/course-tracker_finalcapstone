import axios from 'axios';
import {
  FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE, ADD_NEW_USER,
  LOGIN_NEW_USER, LOGOUT_USER,
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

export const loginUserSuccess = response => ({
  type: LOGIN_NEW_USER,
  payload: response,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER,
});

export const fetchCourses = (url, token) => (dispatch => {
  dispatch(fetchCoursesRequest());
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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
    if (response.data.error) {
      alert('invalid user');
    } else {
      route.push('/home');
    }
  })
    .catch(error => {
      console.log(error);
    });
});

export const loginUser = (url, obj, route) => (dispatch => {
  axios.post(url, obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    console.log(response);
    dispatch(loginUserSuccess(response));
    window.localStorage.setItem('user', JSON.stringify(response));
    if (response.data.error) {
      alert('invalid user');
    } else {
      route.push('/home');
    }
  })
    .catch(error => {
      console.log(error);
    });
});

export const logOut = route => dispatch => {
  dispatch(logoutUserSuccess());
  localStorage.clear();
  route.push('/login');
};
