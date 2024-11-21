import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";
import VocabQuiz from "./pages/VocabQuiz";
<<<<<<< HEAD
import Games from "./pages/Games";

=======
import Word from "./pages/Word";
import UploadWords from "./pages/UploadWords";
>>>>>>> 423579a45d9a4210fcd7f578fb682c7123b29f5c

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<VocabQuiz />} />
<<<<<<< HEAD
        <Route path="/games" element={<Games />} />
=======
        <Route path="/word" element={<Word />} />
        <Route path="/uploadwords" element={<UploadWords />} />
>>>>>>> 423579a45d9a4210fcd7f578fb682c7123b29f5c
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
