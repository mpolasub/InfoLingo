import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";
import VocabQuiz from "./pages/VocabQuiz";
import Games from "./pages/Games";
import Homepage from "./components/Homepage";
import Word from "./pages/Word";
import UploadWords from "./pages/UploadWords";
import DataScience from "./components/DataScience";
import HealthAndWellBeing from "./components/HealthAndWellBeing";
import HCI from "./components/HCI";
import InfoArch from "./components/InfoArch";
import InfoAssurance from "./components/InfoAssurance";
import InfoManagement from "./components/InfoManagement";
import InfoAndSociety from "./components/InfoAndSociety";
import SoftDev from "./components/SoftDev";

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
        <Route path="/games" element={<Games />} />
        <Route path="/word" element={<Word />} />
        <Route path="/uploadwords" element={<UploadWords />} />
        <Route path="/Homepage" element={<Homepage />} />

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
