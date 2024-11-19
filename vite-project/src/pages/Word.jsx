import React from "react";
import UniversalButton from "../components/UniversalButton";
import "../style.css";

const EXAMPLE_WORD = {
    "word": "JavaScript",
    "definition": "blah blah blah",
    "example": "blah blah blah",
    "category": ["Programming"]
  }

function Word(props) {
    const wordObj = EXAMPLE_WORD;

    return (
        <div class="main-container">
            <div class="flex-top">
                <div class="word-container">
                    <span class="current-word">{wordObj.word}</span>
                    <span id="volume-button"><i class="fa-solid fa-volume-high"></i></span>
                    <div id="part-of-speech">noun</div> {/*need to implement*/}
                </div>
                <button id="save-word">Save</button> {/*need to implement (change to universal button) */}
            </div>
            <div class="list-container">
                <p class="list-heading">Definition:</p>
                <ul>
                    <li>{wordObj.definition}</li>
                </ul>
            </div>
            <div class="list-container">
                <p class="list-heading">Examples:</p>
                <ul>
                    <li>{wordObj.example}</li>
                </ul>
            </div>
            {/*need to implement (list out category?)*/}
        </div>
    )
}

export default Word;