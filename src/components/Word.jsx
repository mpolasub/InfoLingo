import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import UniversalButton from "./UniversalButton";
import "../style.css";


function Word() {
    const location = useLocation();
    const navigate = useNavigate();
    const { currWord } = useParams();
    console.log("Current word parameter:", currWord); 

    const [wordObj, setWordObj] = React.useState(null);
    
    useEffect(() => {
        console.log("Effect running with word:", currWord); 
        const db = getDatabase();
        
        const wordRef = ref(db, `/${currWord}`);
        
        get(wordRef)
            .then((snapshot) => {
                console.log("Firebase response:", snapshot.val());
                if (snapshot.exists()) {
                    setWordObj(snapshot.val());
                } else {
                    navigate("/", { replace: true });
                }
            })
            .catch((error) => {
                console.error("Error fetching word:", error);
                navigate("/", { replace: true });
            });
    }, [currWord, navigate]);

    if (!wordObj) {
        return null;
    }
    
    return (
        <div className="main-container">
            <div className="flex-top">
                <div className="word-container">
                    <span className="current-word">{wordObj.word}</span>
                    <span className="volume-button"><i className="fa-solid fa-volume-high"></i></span>
                    <div>{wordObj.partOfSpeech}</div> 
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