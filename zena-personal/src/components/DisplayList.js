import React from "react";
import styled from "styled-components";
import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ title, repos, repoRoot }) => {
  return (
    <List repos={repos}>
      <h2 className="title">{title}</h2>
      <ul>
        {repos.length > 0 ? (
          repos.map(({ id, repoTitle, repoDescription, url }) => {
            return (
              <DisplayListItem
                key={id}
                repoTitle={repoTitle}
                url={url}
                repoDescription={repoDescription}
                repoRoot={repoRoot}
              />
            );
          })
        ) : (
          <li>No {title} 🙅‍🍽</li>
        )}
      </ul>
    </List>
  );
};

export default DisplayList;
const List = styled.div`
  margin-bottom: 50px;
  h2.title {
    font-size: 1.8rem;
    text-align: left;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      font-size: 1.6rem;
    }
  }
`;
