import React from "react";
import styled from "styled-components";

const Form = ({ handleSubmit, handleChange, username, display }) => {
  return (
    <FormContainer display={display}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Github Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
padding: 50px 0;
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  label, input, button {
    font-size: 2rem;
  }
 input {
   margin: 15px 0 30px;
 }
 button {
   padding: 10px 30px;
   background: pink;
   border-color: transparent;
   transition: 0.2s;
 }
 button:hover {
   background: hotpink;
 }
}
  
}
  /* display: ${props => (!props.display ? "none" : "block")}; */
`;
