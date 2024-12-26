import { useState } from "react";
import QuestionList from "./QuestionList";
import "./Quiz.css";

function Quiz() {
  const questions = [
    {
      question: "What is Reactjs?",
      options: [
        "Framework",
        "Library",
        "React is Javascript Library",
        "Language",
      ],
      answer: "React is Javascript Library",
    },
    {
      question: "What is Javascript?",
      options: [
        "JS is Programming Language",
        "JS is Framework",
        "None",
        "Typed Language",
      ],
      answer: "JS is Programming Language",
    },
    {
      question: "Full Form of JS",
      options: ["Javasell", , "JavaSpring", "Javascript", "JavaSplit"],
      answer: "Javascript",
    },
    {
      question: "Who Develop Js?",
      options: ["Brendon", "Brendon Mac", "Bretly", "Brendon Eich"],
      answer: "Brendon Eich",
    },
    {
      question: "Who Develop ReactJs?",
      options: ["Jordan Walk", "Jordan", "Jordan King", "Jordan Sen"],
      answer: "Jordan Walk",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  function handleClick(option) {
    console.log("Option: ", option);
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  }
  function handleNextQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  }
  return (
    <>
      <h1 className="quiz_app">Quiz App</h1>
      <div className="container">
        {currentQuestionIndex < questions.length ? (
          <div>
            <QuestionList
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              handleClick={handleClick}
              currentAnswer={currentAnswer}
            />
            <button
              disabled={currentAnswer === null}
              onClick={handleNextQuestion}
              className={currentAnswer === null ? "button-disable" : "button"}
            >
              Next Question
            </button>
          </div>
        ) : (
          <div className="score">
            Your score is : {score}/{questions.length}
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;
