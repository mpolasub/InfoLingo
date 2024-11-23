import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import UniversalButton from "./UniversalButton";

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

    const [formData, setFormData] = useState({
        word: "",
        definition: "",
        example: "",
        category: []
    });

    // Add validation state
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
        // Clear error when field is edited
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
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            alert("Please fill in all fields");
            return;
        }

        try {
            // First get current data
            const response = await fetch('/word-bank.json');
            const currentData = await response.json();
            
            // Add new word to the array
            const updatedData = [...currentData, formData];
            
            // Log the data nicely formatted
            console.group('Word Bank Update');
            console.log('New word added:', {
                word: formData.word,
                definition: formData.definition,
                example: formData.example,
                category: formData.category
            });
            console.log('Total words in bank:', updatedData.length);
            console.groupEnd();
            
            // Clear form
            setFormData({ word: "", definition: "", example: "", category: [] });
            alert('Word logged successfully (check console)');
            
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to process word');
        }
    };

    return (
        <div className="main-container">
            <div>
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
                    <UniversalButton onClick={handleSubmit} label="Submit" variant="dark" 
                        isFlexible="true" customClass="upload-submit" />
                </div>
            </div>
        </div>
    );
}

export default UploadWords;