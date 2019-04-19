import * as actions from "./posts";
import mockPostData from "../../mock-post-data.json";

describe("fetchPostsSuccess", () => {
  it("should return the action", () => {
    const action = actions.fetchPostsSuccess({ posts: mockPostData });
    expect(action.type).toEqual(actions.FETCH_POSTS_SUCCESS);
    expect(action.posts).toEqual(mockPostData);
  });
});

describe("applyToPostSuccess", () => {
  it("should return the action", () => {
    const action = actions.applyToPostSuccess();
    expect(action.type).toEqual(actions.APPLY_TO_POST_SUCCESS);
  });
});
