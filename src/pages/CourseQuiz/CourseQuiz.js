import React, { useState } from "react";
import "./CourseQuiz.css"


const CourseQuiz = () => {
  const Questionbank = [
    {
      question: "What is html",
      AnswersText: [
        { Answers: "Is it a English language", isCorrect: false },
        { Answers: "H Markup Language,", isCorrect: true },
        { Answers: "Is it a Bangla language", isCorrect: false },
        { Answers: "Is it a Hindi language", isCorrect: false },
      ]
    },
    {
      question: "What is CSS",
      AnswersText: [
        { Answers: "Is it Coding Style and ab", isCorrect: false },
        { Answers: "Cascading Style Sheets", isCorrect: true },
        { Answers: "Coding system", isCorrect: false },
        { Answers: "Coding securty system", isCorrect: false },
      ]
    },
    {
      question: "What is React",
      AnswersText: [
        { Answers: "React is a language", isCorrect: false },
        { Answers: "React JavaScript library ", isCorrect: true },
        { Answers: "React is it nothing", isCorrect: false },
        { Answers: "React is a game", isCorrect: false },
      ]
    },
    {
      question: "3 +2",
      AnswersText: [
        { Answers: "8", isCorrect: false },
        { Answers: "5", isCorrect: true },
        { Answers: "2", isCorrect: false },
        { Answers: "7", isCorrect: false },
      ]
    },
    {
      question: "5 +5",
      AnswersText: [
        { Answers: "5", isCorrect: false },
        { Answers: "10", isCorrect: true },
        { Answers: "24", isCorrect: false },
        { Answers: "9", isCorrect: false },
      ]
    },
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const persent = 100 / Questionbank.length
  const [velue, setVelue] = useState(persent)


  const handelOnclick = (isCorrect) => {
    setVelue(velue + persent)
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuation = currentQuestion + 1;
    if (nextQuation < Questionbank.length) {
      setCurrentQuestion(nextQuation)
    }
    else {
      setShowScore(true)
    }


  }

  const restQuiz = () => {
    setVelue(persent)
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false)
  }

  return (

    <div className="background ">
      <div className="main">
        {showScore ? (
          <div className="score-section">
            you have a score{score} out of {Questionbank.length}
            <>
              <button className="ml-8 bg-gray-400" type="submit" onClick={restQuiz}>Try Againe</button>
            </>
          </div>
        ) : (
          <>
            <div className="question-section ">
              <div className="question-count text-2xl ">
                <div className="w-full mb-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${velue}%` }}></div>
                </div>
                <span>{currentQuestion + 1}</span>/{Questionbank.length}
              </div>
              <div className="question-text text-2xl">
                {Questionbank[currentQuestion].question}

              </div>
              <div className="answer-section text-0xl ">
                {Questionbank[currentQuestion].AnswersText?.map((answer) =>
                (
                  <button className="block m-5" onClick={() => handelOnclick(answer.isCorrect)}>{answer.Answers}</button>
                ))}
              </div>
            </div>
          </>
        )

        }
      </div>
    </div>
  );
};

export default CourseQuiz;
