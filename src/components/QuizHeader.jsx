import React from "react";

function QuizHeader({ title, questionNumber, totalQuestions }) {
  return (
    <header className="quiz-header">
      <h1>{title}</h1>
      <p>
        Question {questionNumber}/{totalQuestions}
      </p>
    </header>
  );
}

export default QuizHeader;
