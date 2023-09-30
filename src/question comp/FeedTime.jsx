const options = [
  { value: "Morning", label: "Morning" },
  { value: "Morning & evening", label: "Morning & evening" },
  {
    value: "Morning, lunch and evenings",
    label: "Morning, lunch and evenings",
  },
  {
    value: "Morning, lunch and evening and before sleep",
    label: "Morning, lunch and evening and before sleep",
  },
];

export const defaultValue = options[0].value;

export const FeedTime = ({ updateAnswer, selectedFeedtime }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    updateAnswer("feedtime", value);
  };

  return (
    <div className="question3">
      <label className="feedTime">
        How many times do you want your cat to be fed?
      </label>
      <br />
      <select
        value={selectedFeedtime}
        className="feedTimeSelect"
        onChange={handleChange}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};
