import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Leaderboard from "./components/Leaderboard";
import VocabQuiz from "./components/VocabQuiz";
import ResultsPage from "./components/ResultsPage"; 
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
import NotYetPage from './components/NotYetPage';
import NotFound from './components/NotFound'
import NavPage from "./components/NavPage";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/VocabQuiz" element={<VocabQuiz />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/word/:currWord" element={<Word />} />
        <Route path="/uploadwords" element={<UploadWords />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/wordslist/:category" element={<WordsList />} />
        <Route path="/NotYetPage" element={<NotYetPage />} />
        <Route path="/NavPage" element={<NavPage />} />

        {/* Topics */}
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/healthandwellbeing" element={<HealthAndWellBeing />} />
        <Route path="/hci" element={<HCI />} />
        <Route path="/infoarch" element={<InfoArch />} />
        <Route path="/infoassurance" element={<InfoAssurance />} />
        <Route path="/infomanagement" element={<InfoManagement />} />
        <Route path="/infoandsociety" element={<InfoAndSociety />} />
        <Route path="/softdev" element={<SoftDev />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

