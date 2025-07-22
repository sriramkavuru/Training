import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Student';
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
        if (Array.isArray(data)) {
          setQuizzes(data);
        } else {
          console.error('Unexpected data format:', data);
          setQuizzes([]);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error.message);
        setQuizzes([]);
      });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleStartQuiz = (quiz) => {
    const quizId = quiz._id || quiz.id;
    if (!quizId) {
      alert('Quiz ID is missing. Please check quiz data.');
      return;
    }
    if (window.confirm('Ready for your quiz?')) {
      navigate(`/attempt-quiz/${quizId}`);
    }
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

        <div className="d-flex flex-wrap mt-4">
          <div className="p-3 bg-white shadow-sm rounded w-100 mb-4">
            <h4 className="text-secondary">Available Quizzes</h4>
          </div>

          {quizzes.length > 0 ? (
            quizzes.map((quiz, index) => (
              <div
                key={index}
                className="card m-2 shadow-sm"
                style={{ width: '18rem', borderRadius: '15px', border: '1px solid #ddd' }}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary">{quiz.course}</h5>
                  <p className="card-text">{quiz.title}</p>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => handleStartQuiz(quiz)}
                  >
                    Quiz
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-muted mx-auto">No quizzes available.</div>
          )}
        </div>
      </main>

      <footer className="bg-dark text-light py-3">
        <div className="container">
          <div className="row small">
            <div className="col-md-3 mb-3">
              <h6 className="text-uppercase fw-bold">SNSCTD</h6>
              <p>Empowering your digital transformation.</p>
            </div>
            <div className="col-md-3 mb-3">
              <h6 className="text-uppercase">London</h6>
              <p className="mb-1">
                <a href="mailto:newbusiness@snsctd.com" className="text-light text-decoration-underline">
                  newbusiness@snsctd.com
                </a>
              </p>
              <p className="mb-1">+91 9491766369</p>
              <p className="mb-1">70 Wapping Wall, London</p>
            </div>
            <div className="col-md-3 mb-3">
              <h6 className="text-uppercase">USA</h6>
              <p className="mb-1">
                <a href="mailto:usa@snsctd.com" className="text-light text-decoration-underline">
                  newbusiness@snsctd.com
                </a>
              </p>
              <p className="mb-1">+91 6305484994</p>
              <p className="mb-1">St 140 line 1, New York, USA</p>
            </div>
            <div className="col-md-3 mb-3">
              <p className="mb-1">Want to be the smartest in your office?</p>
              <p className="mb-2">
                <a href="#" className="text-light text-decoration-underline">
                  Sign up for our newsletter →
                </a>
              </p>
              <p className="mb-1">Follow us:</p>
              <div className="d-flex align-items-center">
                <a href="#" className="me-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="24" height="24" />
                </a>
                <a href="#" className="me-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="24" height="24" />
                </a>
                <a href="#" className="me-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" width="24" height="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StudentDashboard;
