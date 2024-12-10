import { ref, push, set } from "firebase/database";
import { database } from "../main";

export function saveWordToFirebase(wordObj) {
  const wordsRef = ref(database, `/${wordObj.word}`); 

  set(wordsRef, wordObj)
    .then(() => {
      console.log("Word saved successfully:", wordObj);
    })
    .catch((error) => {
      console.error("Error saving word to Firebase:", error);
    });
}
