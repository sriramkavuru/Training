import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Admin';
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/quiz/all')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch quizzes');
        }
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format for quizzes');
        }
        return Promise.all(
          data.map((quiz) =>
            fetch(`http://localhost:8080/attempts/count/${quiz._id}`)
              .then((res) => {
                if (!res.ok) {
                  throw new Error('Failed to fetch attempt count');
                }
                return res.json();
              })
              .then((count) => ({ ...quiz, attemptCount: count }))
              .catch(() => ({ ...quiz, attemptCount: 0 }))
          )
        );
      })
      .then(setQuizzes)
      .catch((error) => {
        console.error('Error loading quizzes:', error.message);
        setQuizzes([]);
      });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleCreateQuiz = () => {
    navigate('/create-quiz');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-dark bg-dark px-4">
        <div className="container-fluid d-flex justify-content-between">
          <span className="navbar-brand">Welcome, {username}</span>
          <span className="text-light fw-bold fs-5">SNSCTD Quiz Center</span>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <main className="flex-grow-1 bg-light py-4 px-3">
        <h2 className="text-center text-primary">{username} Dashboard</h2>

        <div className="text-end mb-3">
          <button className="btn btn-primary" onClick={handleCreateQuiz}>Create Quiz</button>
        </div>

        <div className="row">
          {quizzes.length > 0 ? (
            quizzes.map((quiz, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm p-3 border rounded">
                  <h5 className="text-primary">{quiz.title}</h5>
                  <p className="text-muted">{quiz.course}</p>
                  <p className="text-success">Attempts: {quiz.attemptCount}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted">
              <p>No quizzes found.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-dark text-light py-2">
        <div className="container text-center small">
          <p>SNSCTD Quiz System © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default AdminDashboard;
