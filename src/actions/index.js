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

export const USER_LOGIN = "USER_LOGIN";
export const userLogin = userInfo => dispatch => {
  const data = JSON.stringify({ email: userInfo.email, password: userInfo.password })
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    body: data,
    headers: { "Content-Type": "application/json" }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(resJson => {
      dispatch(userLoginSuccess(resJson.authToken));
    })
    .catch(err => console.error(err));
};

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const userLoginSuccess = jwt => ({
  type: USER_LOGIN_SUCCESS,
  jwt
});
