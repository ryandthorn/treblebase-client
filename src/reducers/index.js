import * as actions from "../actions";
const initialState = {
  posts: [],
  user: null
};

export const indexReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_POSTS_SUCCESS) {
    return Object.assign({}, state, {
      posts: [...action.posts]
    });
  } else if (action.type === actions.USER_LOGIN_SUCCESS) {
    localStorage.setItem("jwt", action.jwt);
    // set user info to state?
    // redirect?
  } else if (action.type === actions.USER_REGISTRATION_SUCCESS) {
    return Object.assign({}, state, {
      user: action.userInfo
    });
  } else if (action.type === actions.USER_REGISTRATION_FAILURE) {
    // handle error
  }

  return state;
};
