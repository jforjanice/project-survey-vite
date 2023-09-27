import React, { useState } from "react";

export const Number = () => {
  return (
    <div className="Question1">
      <label className="catNumber">How many cats do you have?</label>
      <br />
      <input type="number" />
    </div>
  );
};
export default Number;