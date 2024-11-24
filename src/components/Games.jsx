// vite-project/src/pages/Games.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import UniversalButton from "./UniversalButton";
import "../style.css";

function Games() {
  const navigate = useNavigate();

  const gamesData = [
    {
      id: 1,
      title: "Vocabulary Quiz",
      description: "Type the word that matches the definition presented.",
      route: "/quiz",
    },
    {
      id: 2,
      title: "Crossword Puzzle",
      description: "Test your vocabulary! Type the words that matches the definion presented in the crossword.",
      route: "/daily-challenge",
    },
    {
      id: 3,
      title: "Word of the Day",
      description: "Here is today’s word for you!",
      route: "/word-of-the-day",
    },
  ];

  const handleGameClick = (route) => {
    navigate(route);
  };

  return (
    <div>
        <main>
            <section className="games-section">
                <h1 className="centered-heading">Games</h1>
                <div className="games-container">
                {gamesData.map((game) => (
                    <div key={game.id} className="game-card">
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>
                    <UniversalButton
                        label="Play Now"
                        variant="dark"
                        onClick={() => handleGameClick(game.route)}
                    />
                    </div>
                ))}
                </div>
            </section>
        </main>
    </div>
  );
}

export default Games;
