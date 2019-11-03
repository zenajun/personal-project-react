import {
  filterPullRequests,
  filterForkedRepos
} from "../helpers/helperFunctions";
import data from "./testData.json";

describe("Filter pull request repos", () => {
  it("should remove duplicate pull request open vs closed.", () => {
    expect(filterPullRequests(data)).toHaveLength(2);
  });
});

describe("Filter forked repos", () => {
  it("should pass", () => {
    expect(filterForkedRepos(data)).toHaveLength(1);
  });
});
