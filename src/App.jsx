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

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <div>
      <Header />
      <Name />
      <Number />
      <FeedTime />
      <Insurance />
      <Castrated />
      {isSubmitted ? (
        <Summary />
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};
