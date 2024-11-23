import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UniversalButton from "../components/UniversalButton";
import "../style.css";

const EXAMPLE_WORD = {
    "word": "JavaScript",
    "definition": "blah blah blah",
    "example": "blah blah blah",
    "category": ["Programming"]
  }

function Word() {
    const location = useLocation();
    const navigate = useNavigate();
    const { wordObj } = location.state || {};
  
    if (!wordObj) {
        navigate("/", { replace: true });
        return null;
      }
    
    return (
        <div className="main-container">
            <div className="flex-top">
                <div className="word-container">
                    <span className="current-word">{wordObj.word}</span>
                    <span id="volume-button"><i className="fa-solid fa-volume-high"></i></span>
                    <div id="part-of-speech">noun</div> {/*need to implement*/}
                </div>
                <UniversalButton label="Save" variant="dark" isFlexible="true" customClass="save-word"></UniversalButton>
            </div>
            <div className="list-container">
                <p className="list-heading">Definition:</p>
                <ul>
                    <li>{wordObj.definition}</li>
                </ul>
            </div>
            <div className="list-container">
                <p className="list-heading">Examples:</p>
                <ul>
                    <li>{wordObj.example}</li>
                </ul>
            </div>
        </div>
    )
}

export default Word;