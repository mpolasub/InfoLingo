import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";
import VocabQuiz from "./pages/VocabQuiz";
import Games from "./pages/Games";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<VocabQuiz />} />
        <Route path="/games" element={<Games />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
