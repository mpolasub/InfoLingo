import React from "react";
import Navbar from "../components/Navbar";
import "../style.css";

function VocabQuiz() {
  return (
    <div>
      <main id="quiz-main">
        <div className="quiz-container">
          <div className="quiz-header">
            <h1 className="quiz-title">Vocabulary Quiz</h1>
            <h3 className="question-info">Question 1/4</h3>
          </div>
          <div className="instruction">
            <h2>Welcome</h2>
            <h3>Type the word that matches the definition presented:</h3>
          </div>
          <div className="question-box">
            <p className="definition-label">Definition</p>
            <input
              type="text"
              placeholder="Enter the word"
              className="answer-input"
            />
          </div>
          <div className="button-container">
            <button className="universal-button light">Next ➔</button>
            <button className="universal-button dark">Submit</button>
          </div>
        </div>
      </main>
      <footer>© 2024 InfoLingo. All rights reserved.</footer>
    </div>
  );
}

export default VocabQuiz;
