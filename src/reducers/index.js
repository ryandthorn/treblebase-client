import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  USER_LOGIN_SUCCESS
} from "../actions";
// import usersReducer from "./users";
// import postsReducer from "./posts";

const initialState = {
  posts: null,
  user: null,
  fetchingPost: false,
  fetchingUser: false,
  loggedIn: false
};

// export const indexReducer = (state = initialState, action) => {
//   return {
//     user: usersReducer(state, action),
//     posts: postsReducer(state, action)
//   };
// };

export const indexReducer = (state = initialState, action) => {
  // console.log({ action, state });
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, { fetchingPost: true });
    case FETCH_USER:
      return Object.assign({}, state, { fetchingUser: true });
    case FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        fetchingPost: false,
        posts: [...action.posts]
      });
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.jwt);
      return Object.assign({}, state, { loggedIn: true });
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        fetchingUser: false,
        user: action.user
      });
    default:
      return state;
  }
};
