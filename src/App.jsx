import { useState } from "react";
import { Header } from "./Header.jsx";
import { Name } from "./question comp/Name";
import { Number } from "./question comp/Number";
import { FeedTime } from "./question comp/FeedTime";
import { Insurance } from "./question comp/Insurance";
import { Castrated } from "./question comp/Castrated";
import { Summary } from "./Summary.jsx";

export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [answers, setAnswers] = useState({
    name: "",
    number: "",
    feedtime: "",
    insurance: "",
    castrated: "",
  });

  const updateAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <Header updateAnswer={updateAnswer} />
      <Name updateAnswer={updateAnswer} />
      <Number updateAnswer={updateAnswer} />
      <FeedTime updateAnswer={updateAnswer} />
      <Insurance updateAnswer={updateAnswer} />
      <Castrated updateAnswer={updateAnswer} />
      {isSubmitted ? (
        <Summary answers={answers} />
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};
