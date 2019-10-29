import React from "react";

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
    <div>
      <h2>{title}</h2>
      <ul>{items}</ul>      
    </div>
  );
};

export default Display;
