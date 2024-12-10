import { ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth"; 
import { database } from "../main";

export function saveScoreToFirebase(score, totalQuestions, userAnswers) {
  const auth = getAuth(); 
  const user = auth.currentUser; 

  if (!user) {
    console.error("No user is currently signed in.");
    return;
  }

  const scoresRef = ref(database, "quizScores/" + user.uid); 
  const newScoreRef = push(scoresRef);

  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  const data = {
    uid: user.uid,
    email: user.email,
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
    });
}