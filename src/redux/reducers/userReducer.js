import {
  ADD_NEW_USER,
} from '../actions/type';

const userReducer = (state = { user: '' }, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        user: action.payload,
      };
    default: return state;
  }
};

export default userReducer;
