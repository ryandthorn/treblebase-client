import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  USER_LOGIN_SUCCESS,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE
} from "../actions/users";

const initialState = {
  user: null,
  fetchingUser: false,
  editingUser: false,
  loggedIn: false
};

const usersReducer = (state = initialState, action) => {
  // console.log("usersReducer", { state, action });
  switch (action.type) {
    // case USER_REGISTRATION_SUCCESS:
    //   return Object.assign({}, state, {
    //     user: action.userInfo
    //   });
    case FETCH_USER:
      return { ...state, fetchingUser: true };
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.jwt);
      return { ...state, loggedIn: true };
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.user, fetchingUser: false };
    case EDIT_PROFILE:
      return { ...state, editingUser: true };
    case EDIT_PROFILE_SUCCESS:
      return { ...state, user: action.user, editingUser: false };
    case EDIT_PROFILE_FAILURE:
      return { ...state, editingUser: false };
    default:
      return state;
  }
};

export default usersReducer;
