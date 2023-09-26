import { useState } from "react";
import { Header } from "./Header.jsx";
import Questions from "./Questions.jsx";

export const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  
  return (
    <div>
      <Header />
      Survey Project test
      <Questions selectedOption={selectedOption} />
    </div>
  );
};