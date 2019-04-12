import { API_BASE_URL } from "../config";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const FILTER_POSTS_REGION = "FILTER_POSTS_REGION";
export const FILTER_POSTS_SEARCH = "FILTER_POSTS_SEARCH";
export const FILTER_POSTS_STATUS = "FILTER_POSTS_STATUS";

export const fetchPosts = () => dispatch => {
  const jwt = localStorage.getItem("jwt");
  const auth = {
    headers: new Headers({
      Authorization: `Bearer ${jwt}`
    })
  };
  fetch(`${API_BASE_URL}/posts/`, auth)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(resJson => {
      dispatch(fetchPostsSuccess(resJson));
    })
    .catch(err => {
      console.error(err);
      dispatch(fetchPostsFailure(err));
    });
};

export const fetchPostsSuccess = resJson => ({
  type: FETCH_POSTS_SUCCESS,
  posts: resJson.posts
});

export const fetchPostsFailure = err => ({
  type: FETCH_POSTS_FAILURE,
  err
});

export const filterPostsRegion = region => ({
  type: FILTER_POSTS_REGION,
  region
});

export const filterPostsSearch = query => ({
  type: FILTER_POSTS_SEARCH,
  query
});

export const filterPostsStatus = status => ({
  type: FILTER_POSTS_STATUS,
  status
});
