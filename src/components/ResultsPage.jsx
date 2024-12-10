import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveScoreToFirebase } from "./saveScore";
import "../style.css";
import { getAuth } from "firebase/auth";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, userAnswers } = location.state || {};
  const auth = getAuth(); 
  const user = auth.currentUser; 

  
  useEffect(() => {
    if (score !== undefined && totalQuestions !== undefined && user) {
      saveScoreToFirebase(score, totalQuestions, userAnswers);
    }
  }, [score, totalQuestions, userAnswers, user]);

  if (!userAnswers) {
    return (
      <div className="results-container">
        <h2 className="results-title">No Results Found</h2>
        <button className="button-primary" onClick={() => navigate("/VocabQuiz")}>
          Start Quiz
        </button>
      </div>
    );
  }

  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <main id="results-main">
      <div className="results-container">
        <div className="results-header">
          <h1 className="results-title">Quiz Results</h1>
          <p className="results-score">
            You scored <strong>{percentage}%</strong> ({score}/{totalQuestions})
          </p>
          {!user && (
            <div className="result-not-saved-banner">
              Your result was not saved because you are not logged in!
            </div>
          )}
        </div>

        <div className="answers-container">
          <h2>Answers</h2>
          <ul className="answers-list">
            {userAnswers.map((answer, index) => (
              <li
                key={index}
                className={`answer-item ${
                  answer.isCorrect ? "correct" : "incorrect"
                }`}
              >
                <div className="answer-question">
                  <strong>Question {index + 1}: </strong>
                  {answer.question}
                </div>
                {answer.isCorrect ? (
                  <span className="answer-feedback correct-feedback">
                    Correct
                  </span>
                ) : (
                  <>
                    <div className="answer-feedback incorrect-feedback">
                      <span>Your Answer:</span> {answer.userInput}
                    </div>
                    <div>
                      <span>Correct Answer:</span> {answer.correctAnswer}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button className="button-primary" onClick={() => navigate("/VocabQuiz")}>
          Retake Quiz
        </button>
      </div>
    </main>
  );
}

export default ResultsPage;
