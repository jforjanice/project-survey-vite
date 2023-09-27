import React, { useState } from "react";

export const FeedTime = ({ updateAnswer }) => {
  const handleChange = (event) => {
    updateAnswer('feedtime', event.target.value);
  }
  return (
    <div className="Question3">
      <label className="feedTime">How many times do you want your cat to be fed?</label>
      <br />
      <div className="Answers3">
        <select className="feedTimeSelect" id="feedtime" onChange={handleChange}>
          <option value="once">Morning </option>
          <option value="twice"> Morning & evening</option>
          <option value="threeTimes">Morning, lunch and evening</option>
          <option value="fourTimes">
            Morning, lunch and evening and before sleep
          </option>
        </select>
      </div>
    </div>
  );
};
