import React from "react";

const Display = ({ heading, children }) => {
  return (
    <div className="wrapper">
      <h2>{heading}</h2>
      {children}
    </div>
  );
};

export default Display;
