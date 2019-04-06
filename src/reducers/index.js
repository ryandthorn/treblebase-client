// import * as actions from "../actions";
import usersReducer from "./users";
import authReducer from "./auth";

const initialState = {
  posts: [],
  user: null
};

export const indexReducer = (state = initialState, action) => {
  return {
    user: usersReducer(state, action),
    auth: authReducer(state, action)
  };
};
