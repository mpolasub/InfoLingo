import React from "react";
import UniversalButton from "../components/UniversalButton";
import "../style.css";

function Leaderboard() {
  const handleRefresh = () => {
    alert("Leaderboard refreshed!");
  };

  return (
    <div>
      <div className="leaderboard-container">
        <h2 className="centered-heading">Leader Board</h2>
        <div className="leaderboard-table">
          <div className="lead-column">
            <div className="lead-header">Score</div>
            <div className="entry"></div>
            <div className="entry"></div>
            <div className="entry"></div>
          </div>
          <div className="lead-column">
            <div className="lead-header">Username</div>
            <div className="entry"></div>
            <div className="entry"></div>
            <div className="entry"></div>
          </div>
          <div className="lead-column">
            <div className="lead-header">Rank</div>
            <div className="entry"></div>
            <div className="entry"></div>
            <div className="entry"></div>
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
