import * as actions from "../actions";
const initialState = {
  posts: []
};

export const indexReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_POSTS_SUCCESS) {
    return Object.assign({}, state, {
      posts: [...action.posts]
    });
  }

  return state;
};
