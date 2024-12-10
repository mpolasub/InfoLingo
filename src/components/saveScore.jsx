import { ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth"; 
import { database } from "../main";


export function saveScoreToFirebase(score, totalQuestions, userAnswers) {
  const auth = getAuth();
  const currentUser = auth.currentUser; 

  if(!currentUser) {
    console.log("User is not logged in. Score will not save");
  }

  const scoresRef = ref(database, "quizScores"); 
  const newScoreRef = push(scoresRef); 

  const percentage = ((score / totalQuestions) * 100).toFixed(2); 

  const data = {
    score: score,
    totalQuestions: totalQuestions,
    percentage: percentage,
    timestamp: Date.now(), 
    answers: userAnswers, 
  };

  set(newScoreRef, data)
    .then(() => {
      console.log("Score saved successfully:", data);
    })
    .catch((error) => {
      console.error("Error saving score to Firebase:", error);
    })
    ;