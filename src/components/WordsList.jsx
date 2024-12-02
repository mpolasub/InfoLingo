import React from "react";
import { Link } from "react-router-dom";
import words from "../word-bank.json";
import "../style.css";


function WordsList(props) {
 
  const category = props.category;
  
  // Filter words based on the category
  const filteredWords = words.filter(wordObj => wordObj.category.includes(category));

  return (
    <div className="word-list-container">
      <h2>Words in {category}</h2>
      <ul className="word-list">
        {filteredWords.map((wordObj, index) => (
          <li key={index} className="word-item">
            <Link
              to="/word"
              state={{ wordObj }}
              className="word-link"
            >
              {wordObj.word}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default WordsList;
