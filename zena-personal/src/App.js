import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchGitHubEvents, newSearch } from "./store/actions";
import styled from "styled-components";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";
import BackButton from "./components/BackButton";
import {
  filterPullRequests,
  filterForkedRepos
} from "./helpers/helperFunctions";

export const App = ({ repos, isLoaded, userNotFound, loadApi, newSearch }) => {
  const [username, setUsername] = useState("");

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    loadApi(username);
  };

  const handleNewSearch = e => {
    e.preventDefault();
    setUsername("");
    newSearch();
  };

  if (!isLoaded || userNotFound) {
    return (
      <FormDisplay className="wrapper">
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          username={username}
        />
        {userNotFound ? (
          <p className="not-found">
            <strong>{username}</strong> not found, please try again.
          </p>
        ) : (
          ""
        )}
      </FormDisplay>
    );
  } else {
    const forkedRepos = filterForkedRepos(repos);
    const pullRequests = filterPullRequests(repos);
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
        <BackButton handleNewSearch={handleNewSearch} />
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
  loadApi: username => dispatch(fetchGitHubEvents(username)),
  newSearch: () => dispatch(newSearch())
});

export const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const FormDisplay = styled.div`
  p.not-found {
    font-size: 2rem;
    text-align: center;
  }
`;
const RepoDisplay = styled.div`
  h2 {
    font-size: 3.5rem;
    text-align: center;
    font-weight: bold;
  }
`;
