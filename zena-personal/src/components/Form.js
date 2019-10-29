import React from "react";

const Form = ({ handleSubmit, handleChange, username }) => {
  return (
    <>
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
    </>
  );
};

export default Form;
