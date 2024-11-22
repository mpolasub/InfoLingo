import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";
import VocabQuiz from "./pages/VocabQuiz";
import Games from "./pages/Games";
import Homepage from "./components/Homepage";
import Word from "./pages/Word";
import UploadWords from "./pages/UploadWords";
import DataScience from "./DataScience";
import HealthAndWellBeing from "./HealthAndWellBeing";
import HCI from "./HCI";
import InfoArch from "./InfoArch";
import InfoAssurance from "./InfoAssurance";
import InfoManagement from "./InfoManagement";
import InfoAndSociety from "./InfoAndSociety";
import SoftDev from "./SoftDev";


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
        <Route path="/word" element={<Word />} />
        <Route path="/uploadwords" element={<UploadWords />} />
        <Route path="/index" element={<Homepage />} />

        {/* topics */}
        <Route path="/DataScience" element={<DataScience />} />
        <Route path="/HealthAndWellBeing" element={<HealthAndWellBeing />} />
        <Route path="/HCI" element={<HCI />} />
        <Route path="/Infoarch" element={<InfoArch />} />
        <Route path="/InfoAssurance" element={<InfoAssurance />} />
        <Route path="/Infomanagement" element={<InfoManagement />} />
        <Route path="/InfoAndSociety" element={<InfoAndSociety />} />
        <Route path="/SoftDev" element={<SoftDev />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
