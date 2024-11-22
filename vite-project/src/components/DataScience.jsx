import React from "react";
import TopicPage from "./TopicPage";
import WordsList from "./WordsList";

function DataScience() {
  const title = "Data Science";
  const description =
    "Data science combines math, statistics, specialized programming, advanced analytics, and machine learning to uncover actionable insights.";
  const cards = [
    {
      title: "Explore New Terms",
      text: "Discover and learn new terminology to expand your knowledge base.",
      buttonText: "GO",
    },
    {
      title: "Test Your Knowledge",
      text: "Challenge yourself with quizzes to assess your understanding.",
      buttonText: "TEST",
    },
    {
      title: "Play Against Friends",
      text: "Engage in friendly competition and see who knows more.",
      buttonText: "PLAY",
    },
    {
      title: "Add to Our Library",
      text: "Contribute your favorite resources and enhance our materials.",
      buttonText: "ADD",
    },
  ];

  return (
    <div>
      <TopicPage title={title} description={description} cards={cards} />
      <WordsList category="Data Science" />
    </div>
  );
}

export default DataScience;
