import { useState } from "react";

export const Questions = (props) => {
  <div>
  {/* first question */}
  <label>How many cats do you have?</label>
  <br />
  <input />
  <br />
  {/* second question */}
  <label>What is/are your cat(s) name?</label>
  <br />
  <input />
  <br />
  {/* third question */}
  <label for="feedTime">
    How many times do you want your cat to be fed?
  </label>
  <br />
  <select id="feedTime" name="feedTime">
    <option value="once">Morning </option>
    <option value="twice"> Morning & Evening</option>
    <option value="threeTimes">Morning, lunch and evening</option>
    <option value="fourTimes">
      Morning, lunch and evening and before sleep
    </option>
  </select>
</div>
<div>
      <div className="Question1">
        <p>Do you have an insurance for your cat?</p>
      </div>
      <div className="Answers1">
        <label>
          <input 
          type="radio" 
          value="Yes" 
          checked={props.selectedOption === 'Yes'} 
          />
          Yes 
        </label>
        <label>
          <input 
          type="radio" 
          value="No" 
          checked={props.selectedOption === 'No'} 
          />
         No 
        </label>
      </div>;
     
      <div className="Question2">
        <p>Is your cat castrated?</p>
      </div>
      <div className="Answers2">
        <label>
          <input 
          type="radio" 
          value="Yes" 
          checked={props.selectedOption === 'Yes'} 
          />
          Yes 
        </label>
        <label>
          <input 
          type="radio" 
          value="No" 
          checked={props.selectedOption === 'No'} 
          />
         No 
        </label>
      </div>;
      </div>;
};

export default Questions;