import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";
import VocabQuiz from "./pages/VocabQuiz";
import Word from "./pages/Word";
import UploadWords from "./pages/UploadWords";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<VocabQuiz />} />
        <Route path="/word" element={<Word />} />
        <Route path="/uploadwords" element={<UploadWords />} />
      </Routes>
    </Router>
  );
}

export default App;
