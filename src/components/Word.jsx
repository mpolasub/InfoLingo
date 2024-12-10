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

    const [wordObj, setWordObj] = React.useState(null);
    
    useEffect(() => {
        const db = getDatabase();
        
        const wordRef = ref(db, `/${currWord}`);
        
        get(wordRef)
            .then((snapshot) => {
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

    const handleSave = () => {
        navigate("/NotYetPage");
    };
    
    return (
        <div className="main-container">
            <div className="flex-top">
                <div className="word-container">
                    <span className="current-word">{wordObj.word}</span>
                    <span className="volume-button"><i className="fa-solid fa-volume-high" aria-label="volume-icon"></i></span>
                    <div>{wordObj.partOfSpeech}</div> 
                </div>
                {/* saved for future use */}
                {/* <UniversalButton label="Save" variant="dark" customClass="save-word" onClick={() => handleSave()}></UniversalButton> */}
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