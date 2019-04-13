import { API_BASE_URL } from "../config";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const FILTER_POSTS_REGION = "FILTER_POSTS_REGION";
export const FILTER_POSTS_SEARCH = "FILTER_POSTS_SEARCH";
export const FILTER_POSTS_STATUS = "FILTER_POSTS_STATUS";

export const APPLY_TO_POST = "APPLY_TO_POST";
export const APPLY_TO_POST_SUCCESS = "APPLY_TO_POST_SUCCESS";
export const APPLY_TO_POST_FAILURE = "APPLY_TO_POST_FAILURE";

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

export const applyToPost = (formData, postID) => dispatch => {
  const payload = {};
  for (let [key, value] of formData.entries()) {
    payload[key] = value;
  }

  const jwt = localStorage.getItem("jwt");
  const options = {
    headers: new Headers({
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json"
    }),
    method: "PUT",
    body: JSON.stringify({ applicant: payload })
  };

  fetch(`${API_BASE_URL}/posts/apply/${postID}`, options)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(applyToPostSuccess());
    })
    .catch(err => {
      console.error(err);
      dispatch(applyToPostFailure(err));
    });
};

export const applyToPostSuccess = () => ({
  type: APPLY_TO_POST_SUCCESS
})

export const applyToPostFailure = err => ({
  type: APPLY_TO_POST_FAILURE,
  err
})