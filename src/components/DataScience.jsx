import React from "react";
import TopicPage from "./TopicPage";

function DataScience() {
  const title = "Data Science";
  const description =
    "Data science combines math, statistics, specialized programming, advanced analytics, and machine learning to uncover actionable insights.";
    const cards = [
      {
        title: "Explore New Terms",
        text: "Discover and learn new terminology to expand your knowledge base.",
        buttonText: "GO",
        link: "/wordslist/data-science"
      },
      {
        title: "Test Your Knowledge",
        text: "Challenge yourself with quizzes to assess your understanding.",
        buttonText: "TEST",
        link: "/VocabQuiz"
      },
      {
        title: "Play Against Friends",
        text: "Engage in friendly competition and see who knows more.",
        buttonText: "PLAY",
        link: "/Leaderboard"
      },
      {
        title: "Add to Our Library",
        text: "Contribute your favorite resources and enhance our materials.",
        buttonText: "ADD",
        link: "/UploadWords"
      },
    ];
    
  return (
    <div>
      <TopicPage title={title} description={description} cards={cards} />
    </div>
  );
}

export default DataScience;
