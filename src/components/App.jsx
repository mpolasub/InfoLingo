import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
import Leaderboard from "./Leaderboard";
import VocabQuiz from "./VocabQuiz";
import Games from "./Games";
import Homepage from "./Homepage";
import Word from "./Word";
import UploadWords from "./UploadWords";
import DataScience from "./DataScience";
import HealthAndWellBeing from "./HealthAndWellBeing";
import HCI from "./HCI";
import InfoArch from "./InfoArch";
import InfoAssurance from "./InfoAssurance";
import InfoManagement from "./InfoManagement";
import InfoAndSociety from "./InfoAndSociety";
import SoftDev from "./SoftDev";
import WordsList from "./WordsList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/VocabQuiz" element={<VocabQuiz />} />
        <Route path="/games" element={<Games />} />
        <Route path="/word" element={<Word />} />
        <Route path="/uploadwords" element={<UploadWords />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="WordsList" element={<WordsList />} />

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
