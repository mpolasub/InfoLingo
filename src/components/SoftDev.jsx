import React from "react";
import TopicPage from "./TopicPage";

function SoftDev() {
  const title = "Software Development";
  const description =
    "Learn essential principles to enhance your skills in creating innovative software solutions.";
  const cards = [
    {
      title: "Explore New Terms",
      text: "Discover and learn new terminology to expand your knowledge base.",
      buttonText: "GO",
      link: "/wordslist/software-development"
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

export default SoftDev;