import {
  // USER_REGISTRATION_SUCCESS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  USER_LOGIN_SUCCESS
} from "../actions";

const usersReducer = (state, action) => {
  switch (action.type) {
    // case USER_REGISTRATION_SUCCESS:
    //   return Object.assign({}, state, {
    //     user: action.userInfo
    //   });
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.jwt);
      return state;
    case FETCH_USER:
      return Object.assign({}, state, { fetchingUser: true });
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state;
  }
};

export default usersReducer;
