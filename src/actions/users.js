import { API_BASE_URL } from "../config";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const USER_LOGOUT = "USER_LOGOUT";

export const USER_REGISTRATION = "USER_REGISTRATION";
export const USER_REGISTRATION_SUCCESS = "USER_REGISTRATION_SUCCESS";
export const USER_REGISTRATION_FAILURE = "USER_REGISTRATION_FAILURE";

export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAILURE = "EDIT_PROFILE_FAILURE";

export const userLogout = () => ({
  type: USER_LOGOUT
});

export const fetchUser = () => dispatch => {
  const jwt = localStorage.getItem("jwt");
  const auth = {
    headers: new Headers({
      Authorization: `Bearer ${jwt}`
    })
  };
  return fetch(`${API_BASE_URL}/users`, auth)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => {
      dispatch(fetchUserSuccess(user));
    })
    .catch(err => dispatch(fetchUserFailure(err)));
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
      dispatch(fetchUser());
    })
    .catch(err => dispatch(userLoginFailure(err)));
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
      dispatch(userRegistrationSuccess(resJson));
      dispatch(
        userLogin({ email: userInfo.email, password: userInfo.password })
      );
    })
    .catch(err => dispatch(userRegistrationFailure(err)));
};

export const userRegistrationSuccess = userInfo => ({
  type: USER_REGISTRATION_SUCCESS,
  userInfo
});

export const userRegistrationFailure = error => ({
  type: USER_REGISTRATION_FAILURE,
  error
});

export const editProfile = formData => dispatch => {
  const payload = {
    recordings: [],
    photos: []
  };
  for (let [key, value] of formData.entries()) {
    if (key.match(/recording/g)) {
      const i = key.slice(-1);
      const assignKey = key.slice(10, -2);
      payload.recordings[i] = Object.assign(
        {},
        { ...payload.recordings[i] },
        { [assignKey]: value }
      );
    } else if (key.match(/photo/g)) {
      const i = key.slice(-1);
      const assignKey = key.slice(6, -2);
      payload.photos[i] = Object.assign(
        {},
        { ...payload.photos[i] },
        { [assignKey]: value }
      );
    } else {
      payload[key] = value;
    }
  }

  const jwt = localStorage.getItem("jwt");
  const auth = {
    method: "PUT",
    headers: new Headers({
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(payload)
  };
  return fetch(`${API_BASE_URL}/users`, auth)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(updatedUser => dispatch(editProfileSuccess(updatedUser)))
    .catch(err => dispatch(editProfileFailure(err)));
};

export const editProfileSuccess = updatedUser => ({
  type: EDIT_PROFILE_SUCCESS,
  user: updatedUser
});

export const editProfileFailure = err => ({
  type: EDIT_PROFILE_FAILURE,
  err
});
