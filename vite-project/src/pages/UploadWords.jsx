import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import UniversalButton from "../components/UniversalButton";



function UploadWords(props) {

    return (
        <div className="main-container">
            <div>
            <h1>Upload new word</h1>
            <div className="text-enter">
                <label className="box-label" htmlFor="word-upload">Word:</label>
                <div className="text-box">
                    <input type="text" id="word-upload" name="word-upload" placeholder="Enter word" />
                </div>
            </div>
            <div className="text-enter">
                <label className="box-label" htmlFor="definition-upload">Definition:</label>
                <div className="text-box">
                    <input type="text" id="definition-upload" name="definition-upload" placeholder="Enter definition" />
                </div>
            </div>
            <div className="text-enter">
                <label className="box-label" htmlFor="example-upload">Example:</label>
                <div className="text-box">
                    <input type="text" id="example-upload" name="example-upload" placeholder="Enter example" />
                </div>
            </div>
            <UniversalButton label="Submit" variant="dark" isFlexible="true" customClass="upload-submit"></UniversalButton>
            {/* <button id="submit">Submit</button> */}
            </div>
        </div>
    )
}

export default UploadWords;