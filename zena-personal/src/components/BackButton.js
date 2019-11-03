import React from "react";
import styled from "styled-components";

const BackButton = ({ handleNewSearch }) => {
  return <Button onClick={handleNewSearch}>Search for a new user</Button>;
};

export default BackButton;

const Button = styled.button`
font-size: 2rem;
margin: 50px auto 0;
display: block;
padding: 15px 20px;
font-family: inherit;
background: ivory;
transition: 0.2s;
  &:hover {
    background: lemonchiffon;
  }
}`;
