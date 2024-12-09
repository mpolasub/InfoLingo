import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { database } from "../main";
import UniversalButton from "./UniversalButton";
import "../style.css";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  function fetchLeaderboard() {
    const dbRef = ref(database);

    get(child(dbRef, "quizScores"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const userScoresMap = {};

          Object.entries(data).forEach(([uid, userScores]) => {
            Object.entries(userScores).forEach(([key, scoreEntry]) => {
              const answers = scoreEntry.answers;
              const username = scoreEntry.email || "Anonymous";

              if (answers) {
                if (!userScoresMap[username]) {
                  userScoresMap[username] = 0;
                }
                userScoresMap[username] += answers.score || 0;
              }
            });
          });

          const scoresArray = Object.entries(userScoresMap).map(([username, score]) => ({
            username,
            score,
          }));

          scoresArray.sort((a, b) => b.score - a.score);

          setLeaderboard(scoresArray);
        } else {
          console.log("No data available in Firebase.");
          setLeaderboard([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });
  }

  function handleRefresh() {
    fetchLeaderboard();
    alert("Leaderboard refreshed!");
  }

  const rankElements = leaderboard.map((entry, index) => (
    <div className="entry" key={index}>
      {index + 1}
    </div>
  ));

  const usernameElements = leaderboard.map((entry, index) => (
    <div className="entry" key={index}>
      {entry.username}
    </div>
  ));

  const scoreElements = leaderboard.map((entry, index) => (
    <div className="entry" key={index}>
      {entry.score}
    </div>
  ));

  return (
    <div>
      <div className="leaderboard-container">
        <h2 className="centered-heading">Leader Board</h2>
        <div className="leaderboard-table">
          <div className="lead-column">
            <div className="lead-header">Rank</div>
            {rankElements}
          </div>
          <div className="lead-column">
            <div className="lead-header">Username</div>
            {usernameElements}
          </div>
          <div className="lead-column">
            <div className="lead-header">Score</div>
            {scoreElements}
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
