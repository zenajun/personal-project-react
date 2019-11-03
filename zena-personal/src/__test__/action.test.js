import {
  setApiList,
  setIsLoadingApiList,
  setUserNotFound,
  ACTION_TYPES
} from "../store/actions";

describe("Test for setApiList", () => {
  it("returns an object with payload as an array", () => {
    const SUCCESS = {
      type: ACTION_TYPES.SET_API_LIST,
      payload: []
    };
    expect(setApiList([])).toEqual(SUCCESS);
  });
});

describe("Test for setIsLoadingApiList ", () => {
  it("returns an object with payload set to false", () => {
    expect(setIsLoadingApiList(false)).toEqual({
      type: ACTION_TYPES.SET_IS_LOADING,
      payload: false
    });
  });
  it("returns an object with payload set to true", () => {
    expect(setIsLoadingApiList(true)).toEqual({
      type: ACTION_TYPES.SET_IS_LOADING,
      payload: true
    });
  });
});

describe("Test for setUserNotFound", () => {
  it("returns an object with payload set to false", () => {
    expect(setUserNotFound(false)).toEqual({
      type: ACTION_TYPES.USER_NOT_FOUND,
      payload: false
    });
  });
  it("returns an object with payload set to true", () => {
    expect(setUserNotFound(true)).toEqual({
      type: ACTION_TYPES.USER_NOT_FOUND,
      payload: true
    });
  });
});
