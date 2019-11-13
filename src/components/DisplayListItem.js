import React from "react";

const DisplayListItem = ({ repoTitle, repoDescription, url }) => {
  return (
    <li>
      <div>
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {repoTitle}
          </a>
        </h3>
      </div>
      <div>
        <span>{repoDescription}</span>
      </div>
    </li>
  );
};

export default DisplayListItem;
