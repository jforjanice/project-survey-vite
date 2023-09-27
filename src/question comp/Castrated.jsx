import React, { useState } from "react";

export const Castrated = ({ updateAnswer }) => {
  const [selectedOption, setSelectedOption] = useState ("No")
  
  
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    updateAnswer('castrated', value)
  };
  return (
    <div className="Question5">
        <p>Is your cat castrated?</p>
      <div className="Answers5">
        <label>
          <input
            type="radio"
            id="castrated-yes"
            value="Yes"
            checked={selectedOption === "Yes"}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            id="castrated-no"
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
