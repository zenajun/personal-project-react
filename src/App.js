import React, { useState } from "react";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";

const App = () => {
  const [pullRequestData, setPullRequestData] = useState([]);
  const [forkedRepoData, setForkedRepoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");

  const getPullRequests = data => setPullRequestData(data);
  const getForkedRepos = data => setForkedRepoData(data);
  const getIsLoading = (isLoading = false) => setIsLoading(isLoading);
  const getUsername = username => setUsername(username);

  if (!isLoading) {
    return (
      <Form
        getPullRequests={getPullRequests}
        getForkedRepos={getForkedRepos}
        getIsLoading={getIsLoading}
        getUsername={getUsername}
      />
    );
  } else {
    return (
      <RepoDisplay className="wrapper">
        <h2>{username}</h2>
        <DisplayList
          title={"Recent Forks"}
          repos={forkedRepos}
          repoRoot="Forked from: "
        />
        <DisplayList
          title={"Recent Pull Requests"}
          repos={pullRequests}
          repoRoot="status: "
        />
      </RepoDisplay>
    );
  }
};
export default App;
