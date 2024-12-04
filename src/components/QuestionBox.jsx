import React from "react";

function QuestionBox({ definition, userInput, onInputChange }) {
  return (
    <form className="question-box">
      <label htmlFor="answer-input">Definition:</label>
      <p>{definition}</p>
      <input
        id="answer-input"
        type="text"
        placeholder="Enter the word"
        value={userInput}
        onChange={(e) => onInputChange(e.target.value)}
        aria-label="Answer input"
      />
    </form>
  );
}

export default QuestionBox;
