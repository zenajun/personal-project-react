import React from "react";
import styled from "styled-components";

const DisplayListItem = ({ repoTitle, repoDescription, url, repoRoot }) => {
  return (
    <ListItem>
      <div>
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {repoTitle}
          </a>
        </h3>
      </div>
      <div>
        <span>
          {repoRoot || ""}
          {repoDescription}
        </span>
      </div>
    </ListItem>
  );
};

export default DisplayListItem;
const ListItem = styled.li`
  border: 1px solid grey;
  border-radius: 3px;
  padding: 15px;
  margin-bottom: 15px;
  h3 {
    font-size: 1.8rem;
  }
  span {
    font-size: 1.6rem;
  }
`;
