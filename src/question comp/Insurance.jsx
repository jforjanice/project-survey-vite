import React, { useState } from "react";

export const Insurance = ({ updateAnswer }) => {
  const [selectedOption, setSelectedOption] = useState ("No");


  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    updateAnswer('insurance', value)
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
            checked={selectedOption === "Yes"}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            id="insurance-no"
            value="No"
            checked={selectedOption === "No"}
            onChange={handleOptionChange}
          />
          No
        </label>
      </div>
      </div>
  );
};
