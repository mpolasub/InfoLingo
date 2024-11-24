import React from "react";
import TopicPage from "./TopicPage";
import WordsList from "./WordsList";

function InfoAndSociety() {
  const title = "Information and Society";
  const description =
    "Examine key themes to grasp the societal impact of information on culture and communication.";
    const cards = [
      {
        title: "Explore New Terms",
        text: "Discover and learn new terminology to expand your knowledge base.",
        buttonText: "GO",
        link: "/WordsList"
      },
      {
        title: "Test Your Knowledge",
        text: "Challenge yourself with quizzes to assess your understanding.",
        buttonText: "TEST",
        link: "/quiz"
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
      <WordsList category="Information and Society" />
    </div>
  );
}

export default InfoAndSociety;
