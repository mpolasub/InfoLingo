import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="logo-container">
          <img src="./img/InfoLingoLogo.png" alt="InfoLingo Logo" />
        </div>
        <div className="nav-links">
          <Link to="/Homepage">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to= "/games">Games</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
