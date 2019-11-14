import React from "react";

const BackButton = ({ newSearch }) => {
  return <button onClick={() => newSearch()}>Search for a new user</button>;
};

export default BackButton;
