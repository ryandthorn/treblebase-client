import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.jwt);
      return state;
    default:
      return state;
  }
};

export default authReducer;
