import { API_BASE_URL } from "../config";

export const fetchPosts = queryString => dispatch => {
  fetch(`${API_BASE_URL}/posts/${queryString}`, {
    headers: new Headers({ Authorization: `Bearer ${localStorage.jwt}` })
  })
    .then(res => {
      !res.ok ? Promise.reject(res.statusText) : res.json();
    })
    .then(posts => {
      dispatch(fetchPostsSuccess(posts));
    });
};

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
});
