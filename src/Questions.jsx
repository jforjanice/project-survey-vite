export const Questions = (props) => {
  return (
    <div className="Question1">
      <label>How many cats do you have?</label>
      <br />
      <input />
      <div />
      <div className="Question2">
        <label>What is/are your cat(s) name?</label>
        <br />
        <input />
      </div>
      <div className="Question3"></div>
      <label id="feedTime">
        How many times do you want your cat to be fed?
      </label>
      <br />
      <div className="Question4">
        <select id="feedTime" name="feedTime">
          <option value="once">Morning </option>
          <option value="twice"> Morning & evening</option>
          <option value="threeTimes">Morning, lunch and evening</option>
          <option value="fourTimes">
            Morning, lunch and evening and before sleep
          </option>
        </select>
      </div>
      <div className="Question4">
        <p>Do you have an insurance for your cat?</p>
      </div>
      <div className="Answers4">
        <label>
          <input
            type="radio"
            value="Yes"
            checked={props.selectedOption === "Yes"}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            checked={props.selectedOption === "No"}
          />
          No
        </label>
      </div>

      <div className="Question5">
        <p>Is your cat castrated?</p>
      </div>
      <div className="Answers5">
        <label>
          <input
            type="radio"
            value="Yes"
            checked={props.selectedOption === "Yes"}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            checked={props.selectedOption === "No"}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default Questions;
