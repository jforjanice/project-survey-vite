import React, { useState } from "react";

export const Name = ({ updateAnswer }) => {
  const handleChange = (event) => {
    updateAnswer("name", event.target.value);
  };
  return (
    <div className="question1">
      <label className="catName">What is/are your cat(s) name?</label>
      <br />
      <input type="name" id="name" onChange={handleChange} />
    </div>
  );
};
export default Name;
