export const Summary = ({ answers }) => {
  return (
    <div className="summary">
      <h2>
        Thank you for your answers 😺, this is the information you provided:
      </h2>
      <p>😽 Name: {answers.name}</p>
      <p>🐈 Number of cats: {answers.number}</p>
      <p>🥫 Times to feed: {answers.feedtime}</p>
      <p>😸 Insurance: {answers.insurance}</p>
      <p>😼 Castrated: {answers.castrated}</p>
    </div>
  );
};
