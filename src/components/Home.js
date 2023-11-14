import React, { useEffect, useState } from "react";
import questionDatabase from "../questionDatabase";
import toast, { Toaster } from "react-hot-toast";
import QuestionBox from "./QuestionBox";
import Result from "./Result";

const Home = () => {
  const [questionLists, setQuestionLists] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);

  const handleQuestion = () => {
    questionDatabase().then((question) => {
      setQuestionLists(question);
    });
  };

  const correctAnswer = (answer, correct) => {
    if (answer === correct) {
      setScore(score + 1);
      toast.success("Correct baller");
    } else {
      toast.error("Wrong answer");
    }
    setResponses(responses < 5 ? responses + 1 : 5);
  };

  const playAgain = () => {
    handleQuestion();
    setScore(0);
    setResponses(0);
  };

  useEffect(() => {
    handleQuestion();
  }, []);

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <h1 className="quiz-title">Football quiz</h1>
        {questionLists.length > 0 &&
          responses < 5 &&
          questionLists.map(({ question, answers, correct, questionId }) => (
            <QuestionBox
              question={question}
              options={answers}
              key={questionId}
              selected={(answer) => correctAnswer(answer, correct)}
            />
          ))}
        <Toaster />
        {responses === 5 ? (
          <Result score={score} playAgain={playAgain} />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
