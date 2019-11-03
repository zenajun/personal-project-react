import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchGitHubEvents } from "./store/actions";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";
import styled from "styled-components";

export const App = ({ repos, isLoaded, userNotFound, loadApi }) => {
  const [username, setUsername] = useState("");

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    loadApi(username);
  };

  if (!isLoaded || userNotFound) {
    // const user

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
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          username={username}
        />
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
const mapStateToProps = state => ({
  repos: state.api,
  isLoaded: state.isLoaded,
  userNotFound: state.userNotFound
});

const mapDispatchToProps = dispatch => ({
  loadApi: username => dispatch(fetchGitHubEvents(username))
});

export const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const RepoDisplay = styled.div`
  h2 {
    font-size: 3.5rem;
    text-align: center;
    font-weight: bold;
  }
`;
