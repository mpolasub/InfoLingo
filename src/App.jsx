import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Leaderboard from "./components/Leaderboard";
import VocabQuiz from "./components/VocabQuiz";
import Games from "./components/Games";
import Homepage from "./components/Homepage";
import Word from "./components/Word";
import UploadWords from "./components/UploadWords";
import DataScience from "./components/DataScience";
import HealthAndWellBeing from "./components/HealthAndWellBeing";
import HCI from "./components/HCI";
import InfoArch from "./components/InfoArch";
import InfoAssurance from "./components/InfoAssurance";
import InfoManagement from "./components/InfoManagement";
import InfoAndSociety from "./components/InfoAndSociety";
import SoftDev from "./components/SoftDev";
import WordsList from "./components/WordsList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* default route */}
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<VocabQuiz />} />
        <Route path="/games" element={<Games />} />
        <Route path="/word/:currWord" element={<Word />} />
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
    </div>
  );
}

export default App;
