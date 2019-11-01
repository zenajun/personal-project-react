import React from "react";
import styled from "styled-components";
import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ title, repos }) => {
  return (
    <Container repos={repos}>
      <h2>{title}</h2>
      <ul>
        {repos.map(({ id, repoTitle, repoDescription, url }) => {
          return (
            <DisplayListItem
              key={id}
              repoTitle={repoTitle}
              url={url}
              repoDescription={repoDescription}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default DisplayList;
const Container = styled.div`
  display: ${props => (props.repos.length > 0 ? "block" : "none")};
`;
