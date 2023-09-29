import React, { useState } from "react";

export const FeedTime = ({ updateAnswer }) => {
  const handleChange = (event) => {
    updateAnswer("feedtime", event.target.value);
  };
  return (
    <div className="question3">
      <label className="feedTime">
        How many times do you want your cat to be fed?
      </label>
      <br />
      <div className="Answers3">
        <select
          className="feedTimeSelect"
          id="feedtime"
          onChange={handleChange}
        >
          <option value="Morning">Morning </option>
          <option value="Morning & evening"> Morning & evening</option>
          <option value="Morning, lunch and evenings">
            Morning, lunch and evening
          </option>
          <option value="Morning, lunch and evening and before sleep">
            Morning, lunch and evening and before sleep
          </option>
        </select>
      </div>
    </div>
  );
};
