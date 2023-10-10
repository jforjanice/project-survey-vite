import { useState } from "react";
import { Header } from "./Header.jsx";
import { Name } from "./question comp/Name";
import { Number } from "./question comp/Number";
import { FeedTime, defaultValue } from "./question comp/FeedTime";
import { Insurance } from "./question comp/Insurance";
import { Castrated } from "./question comp/Castrated";
import { Summary } from "./Summary.jsx";

export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [show, setShow] = useState(true);
  const [answers, setAnswers] = useState({
    name: "",
    number: "",
    feedtime: defaultValue,
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

  const hideQuestion = () => {
    setShow(!show);
  };

  const handleButtonClick = () => {
    handleSubmit();
    hideQuestion();
  };

  return (
    <div>
      {show && (
        <div className="question-list">
          <Header />
          <Name updateAnswer={updateAnswer} />
          <Number updateAnswer={updateAnswer} />
          <FeedTime
            selectedFeedtime={answers.feedtime}
            updateAnswer={updateAnswer}
          />
          <Insurance
            selectedInsurance={answers.insurance}
            updateAnswer={updateAnswer}
          />
          <Castrated
            selectedCastrated={answers.castrated}
            updateAnswer={updateAnswer}
          />
        </div>
      )}

      {isSubmitted ? (
        <div>
          <Summary answers={answers} />
        </div>
      ) : (
        <div className="button">
          <button type="submit" onClick={handleButtonClick}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
