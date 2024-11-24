import React, { useState } from "react";
import UniversalButton from "./UniversalButton";
import "../style.css";


function QuizHeader({ title, questionNumber, totalQuestions }) {
  return (
    <div className="quiz-header">
      <h1 className="quiz-title">{title}</h1>
      <h3 className="question-info">
        Question {questionNumber}/{totalQuestions}
      </h3>
    </div>
  );
}


function QuizInstruction({ heading, subheading }) {
  return (
    <div className="instruction">
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
    </div>
  );
}


function QuestionBox({ definition, userInput, onInputChange }) {
  return (
    <div className="question-box">
      <p className="definition-label">Definition</p>
      <p className="definition-text">{definition}</p>
      <input
        type="text"
        placeholder="Enter the word"
        className="answer-input"
        value={userInput}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

// Button Container Component
function ButtonContainer({ onNext, onSubmit }) {
  return (
    <div className="button-container">
      <UniversalButton label="Next ➔" variant="light" onClick={onNext} />
      <UniversalButton label="Submit" variant="dark" onClick={onSubmit} />
    </div>
  );
}


function VocabQuiz() {
  const [userInput, setUserInput] = useState(""); 
  const questionNumber = 1;
  const totalQuestions = 4;
  const definition = "";

  
  const handleNext = () => {
    console.log("Next button clicked");
  };

  const handleSubmit = () => {
    console.log("User Input:", userInput);
  };

  return (
    <div>
      <main id="quiz-main">
        <div className="quiz-container">
          <QuizHeader
            title="Vocabulary Quiz"
            questionNumber={questionNumber}
            totalQuestions={totalQuestions}
          />
          <QuizInstruction
            heading="Welcome"
            subheading="Type the word that matches the definition presented:"
          />
          <QuestionBox
            definition={definition}
            userInput={userInput}
            onInputChange={setUserInput}
          />
          <ButtonContainer onNext={handleNext} onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
}

export default VocabQuiz;
