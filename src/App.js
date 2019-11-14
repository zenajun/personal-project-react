import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import DisplayList from "./components/DisplayList";
import BackButton from "./components/BackButton";

const App = () => {
  const [pullRequestData, setPullRequestData] = useState([]);
  const [forkedRepoData, setForkedRepoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");

  const getPullRequests = data => setPullRequestData(data);
  const getForkedRepos = data => setForkedRepoData(data);
  const getIsLoading = (isLoading = false) => setIsLoading(isLoading);
  const getUsername = username => setUsername(username);
  const newSearch = () => {
    setUsername("");
    setIsLoading(false);
    setForkedRepoData([]);
    setPullRequestData([]);
  };
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
      <Display heading={username ? username : "Data is loading..."}>
        <DisplayList
          title={"Recent Forks"}
          repos={forkedRepoData}
          repoRoot="Forked from: "
        />
        <DisplayList
          title={"Recent Pull Requests"}
          repos={pullRequestData}
          repoRoot="status: "
        />
        {username ? <BackButton newSearch={newSearch} /> : ""}
      </Display>
    );
  }
};
export default App;
