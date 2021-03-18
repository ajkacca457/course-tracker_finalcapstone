import {
  ADD_NEW_USER,
  LOGIN_NEW_USER,
  LOGOUT_USER,
} from '../actions/type';

const userReducer = (state = { loggedin: false, user: '' }, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        loggedin: true,
        user: action.payload,
      };
    case LOGIN_NEW_USER:
      return {
        ...state,
        loggedin: true,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedin: false,
      };

    default: return state;
  }
};

export default userReducer;
