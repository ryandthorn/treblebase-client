import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  USER_LOGIN_SUCCESS,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  USER_REGISTRATION,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILURE,
  USER_LOGOUT
} from "../actions/users";

const initialState = {
  user: null,
  fetchingUser: false,
  editingUser: false,
  registeringUser: false,
  loggedIn: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTRATION:
      return { ...state, registeringUser: true };
    case USER_REGISTRATION_SUCCESS:
      return { ...state, user: action.user, registeringUser: false };
    case USER_REGISTRATION_FAILURE:
      return { ...state, registeringUser: false };
    case USER_LOGOUT:
      return { ...state, loggedIn: false };
    case FETCH_USER:
      return { ...state, fetchingUser: true };
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.user, fetchingUser: false };
    case FETCH_USER_FAILURE:
      return { ...state, fetchingUser: false };
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.jwt);
      return { ...state, loggedIn: true };
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
