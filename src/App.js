import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import CreateQuiz from './components/CreateQuiz';
import AttemptQuiz from './components/AttemptQuiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizResult from './components/QuizResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/attempt-quiz/:quizId" element={<AttemptQuiz />} />
        <Route path="/quiz-result" element={<QuizResult />} />
      </Routes>
    </Router>
  );
}
export default App;
