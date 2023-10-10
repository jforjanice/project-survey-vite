export const defaultCastrated = "No";
export const Castrated = ({ updateAnswer, selectedCastrated }) => {
  const handleOptionChange = (event) => {
    const value = event.target.value;
    updateAnswer("castrated", value);
  };
  return (
    <div className="question5">
      <p>Is your cat castrated?</p>
      <div className="Answers5">
        <label>
          <input
            type="radio"
            id="castrated-yes"
            value="Yes"
            checked={selectedCastrated === "Yes"}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            id="castrated-no"
            value="No"
            checked={selectedCastrated === "No"}
            onChange={handleOptionChange}
          />
          No
        </label>
      </div>
    </div>
  );
};
