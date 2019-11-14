import React, { useState } from "react";
import styled from "styled-components";
import { pullRequestData, forkedRepoData } from "./helperFunctions";

const Form = ({
  getPullRequests,
  getForkedRepos,
  getIsLoading,
  getUsername
}) => {
  const [username, setUsername] = useState("");
  const [searching, setSearching] = useState(false);
  const [userError, setUserError] = useState(false);

  const handleChange = e => setUsername(e.target.value);

  const userNotFound = () => {
    getIsLoading(false);
    setSearching(false);
    setUserError(true);
    return getUsername(username);
  };

  const userFound = res => {
    getIsLoading(true);
    setUserError(false);

    return res.json().then(data => {
      getPullRequests(pullRequestData(data));
      getForkedRepos(forkedRepoData(data));
      getUsername(username);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearching(true);
    fetch(`https://api.github.com/users/${username}/events`)
      .then(res => (res.status === 200 ? userFound(res) : userNotFound()))

      .catch(err => console.log(err.message));
  };
  return (
    <FormContainer className="wrapper">
      {searching ? <p>searching...</p> : ""}
      {userError ? <p>Sorry, {username} not found</p> : ""}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Github Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  padding: 50px 0;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label,
    input,
    button {
      font-size: 2rem;
    }
    input {
      margin: 15px 0 30px;
    }
    button {
      padding: 10px 30px;
      background: pink;
      border-color: transparent;
      transition: 0.2s;
    }
    button:hover {
      background: hotpink;
    }
  }
`;
