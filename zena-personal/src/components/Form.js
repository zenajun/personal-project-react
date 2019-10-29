import React from "react";
import styled from "styled-components";

const Form = ({ handleSubmit, handleChange, username, display}) => {
  return (
    <FormContainer display={display}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Github Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  /* display: ${props => (!props.display ? "none" : "block")}; */
`;