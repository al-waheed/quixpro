import React, { useState } from "react";

const QuestionBox = ({ question, answers, selected }) => {
  const [answer, setAnswer] = useState(answers);

  const handleButtonClick = (text) => {
    setAnswer([text]);
    selected(text);
  };

  return (
    <div className="questionbox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerbtn"
          onClick={() => handleButtonClick(text)}
          disabled={selected === text}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;