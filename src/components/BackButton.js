import React from 'react';

const BackButton = ({handleNewSearch}) => {
  return (
    <button onClick={handleNewSearch}>Search for a new user</button>
  )
}

export default BackButton;