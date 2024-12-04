import React from "react";

function FeedbackMessage({ message, isCorrect }) {
  return (
    <p className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
      {message}
    </p>
  );
}

export default FeedbackMessage;
