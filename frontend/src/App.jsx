import logo from "./logo.svg";
import "./App.css";
import { TopicQuiz } from "./Components/TopicQuiz.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { NewQuizPage } from "./Pages/NewQuizPage.jsx";
import { Login } from "./Components/auth/Login.jsx";
import { Register } from "./Components/auth/Register.jsx";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./Components/Admin/Admin.jsx";
import { QuizForm } from "./Components/Admin/QuizForm.jsx";
import { ProfileMain } from "./Components/Profile/ProfileMain.jsx";
import { Quizes } from "./Components/QuizNew/Quizes.jsx";
import { Navbarnew } from "./Components/Navbar/Navbarnew.jsx";
import { Resultshow } from "./Pages/Resultshow.jsx";
import { ShowAllAnswers } from "./Pages/ShowAllAnswers.jsx";
import { LearningGuide } from "./Components/LearningGuide.jsx";
import { LeaderboardPage } from "./Pages/LeaderboardPage.jsx";
import { Flashcards } from "./Components/Flashcards.jsx";

function App() {
  return (
    <div className="App min-h-screen relative overflow-hidden">
      <div className="bg-mesh" />
      <Navbarnew />
      <Routes>
        <Route path="/" element={<TopicQuiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/HTML" element={<NewQuizPage />} />
        <Route path="/CSS" element={<NewQuizPage />} />
        <Route path="/Javascript" element={<NewQuizPage />} />
        <Route path="/React" element={<NewQuizPage />} />
        <Route path="/quiz/:id" element={<Quizes />} />
        <Route path="/Mongodb" element={<NewQuizPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addquiz" element={<QuizForm />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/guide" element={<LearningGuide />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/result" element={<Resultshow />} />
        <Route path="/showallanswer" element={<ShowAllAnswers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
