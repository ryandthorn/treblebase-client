import * as actions from "./users";

const mockUser = {
  firstName: "Mock",
  lastName: "User",
  email: "mock@user.com"
};

describe("fetchUserSuccess", () => {
  it("should return the action", () => {
    const action = actions.fetchUserSuccess(mockUser);
    expect(action.type).toEqual(actions.FETCH_USER_SUCCESS);
    expect(action.user).toEqual(mockUser);
  });
});
