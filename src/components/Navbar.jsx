import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";


function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="navbar">
        <div className="logo-container" onClick={() => navigate('/Homepage')}>
          <img src="./img/InfoLingoLogo.png" alt="InfoLingo Logo"/>
        </div>
        <div className="nav-links">
          <Link to="/Homepage">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/VocabQuiz">Quiz</Link>
          <Link to= "/games">Games</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
