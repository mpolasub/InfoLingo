import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get, getDatabase } from "firebase/database";
import words from "../word-bank.json";
import "../style.css";

function VocabQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const totalQuestions = 6;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const db = getDatabase();
        const wordsRef = ref(db);
        const snapshot = await get(wordsRef);
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          const wordsArray = Object.entries(data)
            .filter(([key]) => key !== 'quizScores')
            .map(([key, value]) => ({
              id: key,
              ...value
            }));
          
          const shuffledQuestions = wordsArray
            .sort(() => 0.5 - Math.random())
            .slice(0, totalQuestions);
          
          setQuestions(shuffledQuestions);
        } else {
          console.error("No data available");
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching words:', error);
        setIsLoading(false);
      }
    };

    fetchWords();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctAnswer = questions[currentQuestionIndex]?.word.toLowerCase();
    const isCorrect = userInput.trim().toLowerCase() === correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

   
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: questions[currentQuestionIndex]?.definition,
        userInput: userInput.trim(),
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
      },
    ]);


    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setUserInput(""); 
    } else {
      
      navigate("/results", {
        state: {
          score: isCorrect ? score + 1 : score, 
          totalQuestions,
          userAnswers: [
            ...userAnswers,
            {
              question: questions[currentQuestionIndex]?.definition,
              userInput: userInput.trim(),
              correctAnswer: correctAnswer,
              isCorrect: isCorrect,
            },
          ],
        },
      });
    }
  };

  if (questions.length === 0) return <p className="loading">Loading questions...</p>;

  const currentDefinition = questions[currentQuestionIndex]?.definition || "";

  return (
    <main id="quiz-main">
      <div className="quiz-container">
        <header className="quiz-header">
          <h1 className="quiz-title">Vocabulary Quiz</h1>
          <p className="question-info">
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </p>
        </header>
        <div className="question-box">
          <label htmlFor="answer-input" className="definition-label">
            Definition
          </label>
          <p className="definition-text">{currentDefinition}</p>
          <input
            id="answer-input"
            className="answer-input"
            type="text"
            placeholder="Enter the word"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <button className="universal-button submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </main>
  );
}

export default VocabQuiz;
