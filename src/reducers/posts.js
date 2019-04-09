import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS
} from "../actions";

const initialState = {
  storage: [],
  fetchingPosts: false
};

const postsReducer = (state = initialState, action) => {
  // console.log("postsReducer", { state, action });
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, fetchingPosts: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, storage: [...action.posts], fetchingPosts: false };
    case FETCH_POSTS_FAILURE:
      return { ...state, fetchingPosts: false };
    default:
      return state;
  }
};

export default postsReducer;
