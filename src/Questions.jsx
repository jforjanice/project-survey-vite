export const Questions = () => {
  return (
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
  );
};
