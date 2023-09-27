import React, { useState } from "react";

export const Castrated = () => {
  const [selectedOption, setSelectedOption] = useState ("No");
  const handleOptionChange = (event) => {
    setSelectedOption (event.target.value);
  };
  return (
    <div className="Question5">
        <p>Is your cat castrated?</p>
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
