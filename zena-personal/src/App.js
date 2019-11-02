import React, { useState } from "react";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";
import styled from "styled-components";

const App = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoaded, setLoading] = useState(false);

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${username}/events`)
      .then(res => (res.status === 200 ? res.json() : setLoading(false)))
      .then(data => {
        setRepos(data);
        setLoading(true);
      })
      .catch(err => console.log(err.message));
  };

  // const handleNewSearch = (e) => {
  //   setUsername('');
  //   setRepos(false);
  // }

  if (!isLoaded) {
    return (
      <div className="wrapper">
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          username={username}
        />
      </div>
    );
  } else {
    const forkedRepos = repos
      .filter(repo => repo.type === "ForkEvent")
      .map(repo => {
        return {
          id: repo.id,
          repoTitle: repo.payload.forkee.full_name,
          repoDescription: repo.repo.name,
          url: repo.payload.forkee.html_url
        };
      });

    const pullRequests = repos
      .filter(repo => repo.type === "PullRequestEvent")
      .map(repo => {
        return {
          id: repo.id,
          repoTitle: repo.payload.pull_request.title,
          repoDescription: repo.payload.pull_request.state,
          url: repo.payload.pull_request.html_url
        };
      });

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
        {/* <BackButton handleNewSearch={handleNewSearch} /> */}
      </RepoDisplay>
    );
  }
};

export default App;

const RepoDisplay = styled.div`
  h2 {
    font-size: 3.5rem;
    text-align: center;
    font-weight: bold;
  }
`;
