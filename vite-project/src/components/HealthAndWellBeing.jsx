import React from "react";
import TopicPage from "./TopicPage";
import WordsList from "./WordsList";


function HealthAndWellBeing() {
  const title = "Health and Well Being";
  const description =
    "Discover key concepts that enhance understanding of technology's role in improving health outcomes.";
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
      {/* <WordsList category="Health & Well-Being" /> */}
    </div>
  );
}

export default HealthAndWellBeing;
