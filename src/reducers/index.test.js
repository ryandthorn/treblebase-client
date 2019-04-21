import * as posts from "../actions/posts";
import * as users from "../actions/users";
import postsReducer from "./posts";
import usersReducer from "./users";

const mockPosts = { posts: [{ post: true }, { post: true }] };
const mockUser = { key: "value" };

describe("postsReducer", () => {
  it("should return its default state", () => {
    const defaultState = {
      storage: [],
      region: "",
      query: "",
      status: "open",
      fetchingPosts: false
    };
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  describe("fetchPostsSuccess", () => {
    it("should update posts.storage with fetched posts", () => {
      let state = [];
      state = postsReducer(state, posts.fetchPostsSuccess(mockPosts, 0));
      expect(state.storage).toEqual(mockPosts.posts);
    });
  });
});

describe("usersReducer", () => {
  it("should return its default state", () => {
    const defaultState = {
      user: null,
      fetchingUser: false,
      editingUser: false,
      registeringUser: false,
      loggedIn: false
    };
    const newState = usersReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  describe("fetchUserSuccess", () => {
    it("should update users.user with fetched user", () => {
      let state = { user: null };
      state = usersReducer(state, users.fetchUserSuccess(mockUser), 0);
      expect(state.user).toEqual(mockUser);
    });
  });
});
