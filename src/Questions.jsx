import { useState } from "react";

export const Questions(props) = () => {
  return 
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