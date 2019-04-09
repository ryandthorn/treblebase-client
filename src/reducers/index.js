import usersReducer from "./users";
import postsReducer from "./posts";
import { combineReducers } from "redux";

export const indexReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
});
