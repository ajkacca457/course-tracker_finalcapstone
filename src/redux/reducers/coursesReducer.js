import {
  FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE,
} from '../actions/type';

export const initialstate = {
  loading: false,
  courses: { courses: [] },
  error: '',
};

const coursesReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COURSES_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
        error: '',
      };

    case FETCH_COURSES_FAILURE:
      return {
        loading: false,
        error: action.payload,

      };

    default: return state;
  }
};

export default coursesReducer;
