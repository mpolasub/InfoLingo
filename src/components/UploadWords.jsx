import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import UniversalButton from "./UniversalButton";
import { saveWordToFirebase } from "./uploadWordToDb"
import { ref, get, getDatabase } from "firebase/database";


function UploadWords(props) {
    const categories = [
        "Data Science",
        "Health & Well-Being",
        "Human-Computer Interaction",
        "Information Architecture",
        "Information Assurance and Cybersecurity",
        "Information Management",
        "Information & Society",
        "Software Development"
    ];

    const partsOfSpeech = [
        "Noun",
        "Pronoun",
        "Verb",
        "Adjective",
        "Adverb",
        "Preposition",
        "Conjunction",
        "Interjection"
    ];

    const [formData, setFormData] = useState({
        word: "",
        definition: "",
        example: "",
        category: [],
        partOfSpeech: ""
    });


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "category") {
            setFormData({
                ...formData,
                category: [value]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.word.trim()) {
            newErrors.word = "Word is required";
        }
        if (!formData.definition.trim()) {
            newErrors.definition = "Definition is required";
        }
        if (!formData.example.trim()) {
            newErrors.example = "Example is required";
        }
        if (!formData.category.length || !formData.category[0]) {
            newErrors.category = "Category is required";
        }
        if (!formData.partOfSpeech) {
            newErrors.partOfSpeech = "Part of speech is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const db = getDatabase();
            const wordsRef = ref(db, '/');
            
            const snapshot = await get(wordsRef);
            
            if (snapshot.exists()) {
                const currentData = snapshot.val();
                if (currentData[formData.word]) {
                    alert('This word already exists in the database');
                    return;
                }
            }
            
            const wordObj = {
                word: formData.word,
                definition: formData.definition,
                example: formData.example,
                category: formData.category,
                partOfSpeech: formData.partOfSpeech
            };
            
            saveWordToFirebase(wordObj);

            
            setFormData({ word: "", definition: "", example: "", category: [] });
            alert('Word uploaded successfully');
            
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to process word');
        }
    };

    return (
        <div className="main-container">
            <div className="center-helper">
                <h1>Upload new word</h1>
                <div>
                    <div className="text-enter">
                        <label className="box-label" htmlFor="word">Word:</label>
                        <div className="text-box">
                            <input
                                type="text"
                                id="word"
                                name="word"
                                value={formData.word}
                                onChange={handleChange}
                                placeholder="Enter word"
                                className={errors.word ? "error" : ""}
                            />
                            {errors.word && <div className="error-message">{errors.word}</div>}
                        </div>
                    </div>
                    <div className="text-enter">
                        <label className="box-label" htmlFor="definition">Definition:</label>
                        <div className="text-box">
                            <input
                                type="text"
                                id="definition"
                                name="definition"
                                value={formData.definition}
                                onChange={handleChange}
                                placeholder="Enter definition"
                                className={errors.definition ? "error" : ""}
                            />
                            {errors.definition && <div className="error-message">{errors.definition}</div>}
                        </div>
                    </div>
                    <div className="text-enter">
                        <label className="box-label" htmlFor="example">Example:</label>
                        <div className="text-box">
                            <input
                                type="text"
                                id="example"
                                name="example"
                                value={formData.example}
                                onChange={handleChange}
                                placeholder="Enter example"
                                className={errors.example ? "error" : ""}
                            />
                            {errors.example && <div className="error-message">{errors.example}</div>}
                        </div>
                    </div>
                    <div className="text-enter">
                        <label className="box-label" htmlFor="partOfSpeech">Part of Speech:</label>
                        <div className="text-box">
                            <select
                                id="partOfSpeech"
                                name="partOfSpeech"
                                value={formData.partOfSpeech}
                                onChange={handleChange}
                                className={errors.partOfSpeech ? "error" : ""}
                            >
                                <option value="">Select part of speech</option>
                                {partsOfSpeech.map((part) => (
                                    <option key={part} value={part.toLowerCase()}>
                                        {part}
                                    </option>
                                ))}
                            </select>
                            {errors.partOfSpeech && <div className="error-message">{errors.partOfSpeech}</div>}
                        </div>
                    </div>
                    <div className="text-enter">
                        <label className="box-label" htmlFor="category">Category:</label>
                        <div className="text-box">
                            <select
                                id="category"
                                name="category"
                                value={formData.category[0] || ""}
                                onChange={handleChange}
                                className={errors.category ? "error" : ""}
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            {errors.category && <div className="error-message">{errors.category}</div>}
                        </div>
                    </div>
                    <div className="submit-container">
                        <UniversalButton onClick={handleSubmit} label="Submit" variant="dark" 
                            isFlexible="true" customClass="upload-submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadWords;