import React from "react";
import styled from "styled-components";
import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ title, repos, repoRoot }) => {
  return (
    <List repos={repos}>
      <h2 className="title">{title}</h2>
      <ul>
        {repos.map(({ id, repoTitle, repoDescription, url }) => {
          return (
            <DisplayListItem
              key={id}
              repoTitle={repoTitle}
              url={url}
              repoDescription={repoDescription}
              repoRoot={repoRoot}
            />
          );
        })}
      </ul>
    </List>
  );
};

export default DisplayList;
const List = styled.div`
  display: ${props => (props.repos.length > 0 ? "block" : "none")};
  h2.title {
    font-size: 1.8rem;
    text-align: left;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
