import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

const CourseQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/musasazib/fake-dada/main/src/components/eLarning/QuestionBank.json"
    )
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, []);

  return (
    <div className="container ml-10">
      <h4 className="text-xl font-semibold my-8">
        Complete Web Development Course With BrainSkills e-Learning
      </h4>
      <div>
        {quizzes
          .map((quiz) => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
          .sort(() => Math.random())
          .slice(0, 1)}
      </div>
    </div>
  );
};

export default CourseQuiz;
