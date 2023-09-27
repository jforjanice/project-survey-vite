import React, { useState } from "react";

export const Insurance = () => {
  const [selectedOption] = useState ("No");
  const handleOptionChange = (event) => {
    setSelectedOption (event.target.value);
  };
  return (
    <div className="Question4">
        <p>Do you have an insurance for your cat?</p>
        <div className="Answers5">
        <label>
          <input
            type="radio"
            value="Yes"
            checked={selectedOption === "Yes"}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
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
