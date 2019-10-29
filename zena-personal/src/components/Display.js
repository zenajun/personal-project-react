import React from "react";
import styled from "styled-components";


const Display = ({ title, repos }) => {

  const items = repos.map(({id, repoTitle, repoDescription}) => (
    <li key={id}>
      <div>
        <h3>{repoTitle}</h3>
      </div>
      <div>
        <span>{repoDescription}</span>
      </div>
    </li>
  ));

  return (
    <Container repos={repos}>
      <h2>{title}</h2>
      <ul>{items}</ul>      
    </Container>
  );
};

export default Display;
const Container = styled.div`
  display: ${props => (props.repos.length > 0 ? "block" : "none")};
`;