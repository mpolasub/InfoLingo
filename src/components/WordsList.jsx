import React from "react";
import { Link, useParams } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import "../style.css";

function WordsList() {
  const { category } = useParams();
  
  let decodedCategory = category;
  if (decodedCategory === "data-science") {
    decodedCategory = "Data Science";
  } else if (decodedCategory === "human-computer-interaction") {
    decodedCategory = "Human-Computer Interaction";
  } else if (decodedCategory === "health-and-well-being") {
    decodedCategory = "Health & Well-Being";
  } else if (decodedCategory === "information-and-society") {
    decodedCategory = "Information & Society";
  } else if (decodedCategory === "information-architecture") {
    decodedCategory = "Information Architecture";
  } else if (decodedCategory === "information-assurance-and-cybersecurity") {
    decodedCategory = "Information Assurance and Cybersecurity";
  } else if (decodedCategory === "information-management") {
    decodedCategory = "Information Management";
  } else if (decodedCategory === "software-development") {
    decodedCategory = "Software Development";
  }

  const [filteredWords, setFilteredWords] = React.useState([]);
  const title = React.useState(`${decodedCategory}`);
  const description = React.useState(`Explore and learn words related to ${decodedCategory}.`);


  React.useEffect(() => {
    const db = getDatabase();
    const wordsRef = ref(db);

    get(wordsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const allWords = snapshot.val();
          const filtered = Object.values(allWords).filter(wordObj =>
            wordObj.category && wordObj.category.includes(decodedCategory)
          );
          setFilteredWords(filtered);
        } else {
          console.error("No data available");
          setFilteredWords([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching words:", error);
        setFilteredWords([]);
      });
  }, [decodedCategory]);

  return (
    <div>
      <header className="topic-banner">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <div className="word-list-container">
        <div className="card-container">
          {filteredWords.map((wordObj, index) => (
            <div key={index} className="word-card">
              <div className="word-card-content">
                <h2 className="word-title">{wordObj.word}</h2>
                <Link 
                  to={`/word/${encodeURIComponent(wordObj.word)}`} 
                  className="word-link"
                  state={{ wordObj }}
                >
                  GO
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default WordsList;
