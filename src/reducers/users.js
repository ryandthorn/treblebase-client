import {
  USER_REGISTRATION,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILURE
} from "../actions";

const usersReducer = (state = undefined, action) => {
  switch (action.type) {
    case USER_REGISTRATION_SUCCESS:
      return Object.assign({}, state, {
        user: action.userInfo
      });
    default:
      return state;
  }
};

export default usersReducer;
