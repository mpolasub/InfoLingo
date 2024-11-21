import React from "react";
import "../style.css";



function UploadWords(props) {

    return (
        <div class="main-container">
            <h1>Upload new word</h1>
            <div class="text-enter">
                <label class="box-label" for="word-upload">Word:</label>
                <div class="text-box">
                    <input type="text" id="word-upload" name="word-upload" placeholder="Enter word" />
                </div>
            </div>
            <div class="text-enter">
                <label class="box-label" for="definition-upload">Definition:</label>
                <div class="text-box">
                    <input type="text" id="definition-upload" name="definition-upload" placeholder="Enter definition" />
                </div>
            </div>
            <div class="text-enter">
                <label class="box-label" for="example-upload">Example:</label>
                <div class="text-box">
                    <input type="text" id="example-upload" name="example-upload" placeholder="Enter example" />
                </div>
            </div>
            <button id="submit">Submit</button>
        </div>
    )
}

export default UploadWords;