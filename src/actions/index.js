import { API_BASE_URL } from "../config";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const USER_REGISTRATION = "USER_REGISTRATION";
export const USER_REGISTRATION_SUCCESS = "USER_REGISTRATION_SUCCESS";
export const USER_REGISTRATION_FAILURE = "USER_REGISTRATION_FAILURE";

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

export const fetchUser = () => dispatch => {
  const jwt = localStorage.getItem("jwt");
  const auth = {
    headers: new Headers({
      Authorization: `Bearer ${jwt}`
    })
  };
  fetch(`${API_BASE_URL}/users`, auth)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => {
      dispatch(fetchUserSuccess(user));
    })
    .catch(err => {
      console.error(err);
      dispatch(fetchUserFailure(err));
    });
};
export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user
});

export const fetchUserFailure = err => ({
  type: FETCH_USER_FAILURE,
  err
});

export const userLogin = userInfo => dispatch => {
  const data = JSON.stringify({
    email: userInfo.email,
    password: userInfo.password
  });
  fetch(`${API_BASE_URL}/auth/login`, {
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
      dispatch(fetchUser());
      dispatch(userLoginSuccess(resJson.authToken));
    })
    .catch(err => {
      console.error(err);
      dispatch(userLoginFailure(err));
    });
};

export const userLoginSuccess = jwt => ({
  type: USER_LOGIN_SUCCESS,
  jwt
});

export const userLoginFailure = err => ({
  type: USER_LOGIN_FAILURE,
  err
});

export const userRegistration = userInfo => dispatch => {
  const data = JSON.stringify(userInfo);
  return fetch(`${API_BASE_URL}/users`, {
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
      // dispatch(userRegistrationSuccess(resJson));
      dispatch(
        userLogin({ email: userInfo.email, password: userInfo.password })
      );
    })
    .catch(err => {
      console.error(err);
      dispatch(userRegistrationFailure(err));
    });
};

export const userRegistrationSuccess = userInfo => ({
  type: USER_REGISTRATION_SUCCESS,
  userInfo
});

export const userRegistrationFailure = error => ({
  type: USER_REGISTRATION_FAILURE,
  error
});
