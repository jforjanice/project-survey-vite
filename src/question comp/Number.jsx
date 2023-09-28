import React, { useState } from "react";

export const Number = ({ updateAnswer }) => {
  const handleChange = (event) => {
    updateAnswer('number', event.target.value);
  };
  return (
    <div className="question2">
      <label className="catNumber">How many cats do you have?</label>
      <br />
      <input type="number" id="number" onChange={handleChange}/>
    </div>
  );
};
export default Number;