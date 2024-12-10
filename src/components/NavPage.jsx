import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UniversalButton from "./UniversalButton";

function NavPage() {
    const navigate = useNavigate();

    const handleRedirectClick = (route) => {
        navigate(route);
    };


  return (
    <div className="nav-page">
      <nav className="nav-grid">
      <UniversalButton label="Home"
                        variant="dark"
                        onClick={() => handleRedirectClick("/Homepage")} />
       <UniversalButton 
          label="Login" 
          variant="dark" 
          onClick={() => handleRedirectClick("/login")} 
        />
        <UniversalButton 
          label="Leaderboard" 
          variant="dark" 
          onClick={() => handleRedirectClick("/leaderboard")} 
        />
        <UniversalButton 
          label="Quiz" 
          variant="dark" 
          onClick={() => handleRedirectClick("/VocabQuiz")} 
        />
        <UniversalButton 
          label="Games" 
          variant="dark" 
          onClick={() => handleRedirectClick("/games")} />
      </nav>
    </div>
  );
}

export default NavPage;