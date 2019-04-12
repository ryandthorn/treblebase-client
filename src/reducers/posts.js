import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  FILTER_POSTS_REGION,
  FILTER_POSTS_SEARCH,
  FILTER_POSTS_STATUS
} from "../actions/posts";

const initialState = {
  storage: [],
  region: "",
  query: "",
  status: "open",
  fetchingPosts: false
};

const postsReducer = (state = initialState, action) => {
  console.log("postsReducer", { state, action });
  switch (action.type) {
    case FILTER_POSTS_REGION:
      return { ...state, region: action.region };
    case FILTER_POSTS_SEARCH:
      return { ...state, query: action.query };
    case FILTER_POSTS_STATUS:
      return { ...state, status: action.status };
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
