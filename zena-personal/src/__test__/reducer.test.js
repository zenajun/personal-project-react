import { apiReducer } from "../store/reducer";
import {
  ACTION_TYPES,
  setApiList,
  setIsLoadingApiList,
  setUserNotFound
} from "../store/actions";

const INITIAL_STATE = {
  api: [],
  isLoaded: false,
  userNotFound: false
};
describe("Reducer tests", () => {
  it("return new state with isLoaded set to true", () => {
    const PASS_STATE = {
      api: [],
      isLoaded: true,
      userNotFound: false
    };

    expect(apiReducer(INITIAL_STATE, setIsLoadingApiList(true))).toEqual(
      PASS_STATE
    );
  });
  it("return new state with api array === [1]", () => {
    const PASS_STATE = {
      api: [1],
      isLoaded: false,
      userNotFound: false
    };

    expect(apiReducer(INITIAL_STATE, setApiList([1]))).toEqual(PASS_STATE);
  });
  it("return new state with userNotFound set to true", () => {
    const PASS_STATE = {
      api: [],
      isLoaded: false,
      userNotFound: true
    };

    expect(apiReducer(INITIAL_STATE, setUserNotFound(true))).toEqual(
      PASS_STATE
    );
  });
});
