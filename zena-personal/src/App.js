import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchGitHubEvents } from "./store/actions";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";
import styled from "styled-components";
import {
  filterPullRequests,
  filterForkedRepos
} from "./helpers/helperFunctions";

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
