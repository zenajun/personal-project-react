import React, { useState } from "react";
import styled from "styled-components";
import { pullRequestData, forkedRepoData } from "./helperFunctions";

const Form = ({
  getPullRequest,
  getForkedRepos,
  getIsLoading,
  getUsername
}) => {
  const [username, setUsername] = useState("");

  const handleChange = e => setUsername(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}/events`)
      .then(res => (res.status === 200 ? res.json() : ""))
      .then(data => {
        getIsLoading(true);
        getPullRequest(pullRequestData(data));
        getForkedRepos(forkedRepoData(data));
        getUsername(username);
      })
      .catch(err => console.log(err.message));
  };
  return (
    <FormContainer className="wrapper">
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
  label, input, button {
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
  
}
  /* display: ${props => (!props.display ? "none" : "block")}; */
`;
