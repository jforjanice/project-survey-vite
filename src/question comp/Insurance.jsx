import React, { useState } from "react";

export const Insurance = ({ updateAnswer, selectedInsurance }) => {
  const handleOptionChange = (event) => {
    const value = event.target.value;
    updateAnswer("insurance", value);
  };

  return (
    <div className="question4">
      <p>Do you have an insurance for your cat?</p>
      <div className="Answers5">
        <label>
          <input
            type="radio"
            id="insurance-yes"
            value="Yes"
            checked={selectedInsurance === "Yes"}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            id="insurance-no"
            value="No"
            checked={selectedInsurance === "No"}
            onChange={handleOptionChange}
          />
          No
        </label>
      </div>
    </div>
  );
};
