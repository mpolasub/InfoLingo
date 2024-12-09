import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { database } from "../main";
import UniversalButton from "./UniversalButton";
import "../style.css";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, "quizScores")); // Fetch "quizScores" data

      if (snapshot.exists()) {
        const data = snapshot.val();
        const scoresArray = [];

        // Iterate through each user (UID)
        Object.entries(data).forEach(([uid, userScores]) => {
          // Iterate through each quiz entry for the user
          Object.entries(userScores).forEach(([key, scoreEntry]) => {
            const answers = scoreEntry.answers;

            // Push the relevant data to the scoresArray
            if (answers) {
              scoresArray.push({
                username: scoreEntry.email || "Anonymous", // Optional email field
                score: answers.score || 0, // Score from the "answers" object
              });
            }
          });
        });

        // Sort scoresArray by score in descending order
        scoresArray.sort((a, b) => b.score - a.score);

        setLeaderboard(scoresArray); // Update state with sorted data
      } else {
        console.log("No data available in Firebase.");
        setLeaderboard([]);
      }
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  // Fetch leaderboard on component mount
  useEffect(() => {
    fetchLeaderboard();
  }, []);

  // Handle leaderboard refresh
  const handleRefresh = () => {
    fetchLeaderboard();
    alert("Leaderboard refreshed!");
  };

  return (
    <div>
      <div className="leaderboard-container">
        <h2 className="centered-heading">Leader Board</h2>
        <div className="leaderboard-table">
          <div className="lead-column">
            <div className="lead-header">Rank</div>
            {leaderboard.map((entry, index) => (
              <div className="entry" key={index}>
                {index + 1}
              </div>
            ))}
          </div>
          <div className="lead-column">
            <div className="lead-header">Username</div>
            {leaderboard.map((entry, index) => (
              <div className="entry" key={index}>
                {entry.username}
              </div>
            ))}
          </div>
          <div className="lead-column">
            <div className="lead-header">Score</div>
            {leaderboard.map((entry, index) => (
              <div className="entry" key={index}>
                {entry.score}
              </div>
            ))}
          </div>
        </div>
        <UniversalButton
          label="Refresh Leaderboard"
          variant="light"
          onClick={handleRefresh}
        />
      </div>
    </div>
  );
}

export default Leaderboard;
