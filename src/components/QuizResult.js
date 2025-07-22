import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function QuizResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };
  const username = localStorage.getItem('username') || 'Student';

  const handleBack = () => {
    navigate('/student');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav style={{ backgroundColor: '#212529', padding: '10px 30px', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
        <span style={{ fontWeight: 'bold' }}>Welcome, {username}</span>
        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>SNSCTD Quiz Center</span>
        <button onClick={() => navigate('/')} style={{ backgroundColor: '#dc3545', border: 'none', padding: '5px 15px', borderRadius: '5px', color: 'white' }}>
          Logout
        </button>
      </nav>

      <main style={{ flex: 1, padding: '40px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '40px', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#28a745', marginBottom: '20px' }}>🎉 Quiz Completed!</h2>
          <h4 style={{ color: '#007bff', marginBottom: '20px' }}>Your Score: <span style={{ color: '#000' }}>{score}</span> / {total}</h4>
          <p style={{ fontSize: '18px', color: '#555' }}>Thank you for participating in the quiz.</p>
          <button onClick={handleBack} style={{ marginTop: '30px', padding: '10px 25px', backgroundColor: '#007bff', border: 'none', color: '#fff', borderRadius: '5px', fontSize: '16px' }}>
            Back to Dashboard
          </button>
        </div>
      </main>

      <footer style={{ backgroundColor: '#212529', color: 'white', padding: '15px 20px', fontSize: '13px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: 'auto' }}>
          <div style={{ flex: '1 1 180px', marginBottom: '10px' }}>
            <h6>SNSCTD</h6>
            <p style={{ marginBottom: '5px' }}>Empowering digital transformation.</p>
          </div>
          <div style={{ flex: '1 1 180px', marginBottom: '10px' }}>
            <h6>London</h6>
            <p style={{ marginBottom: '5px' }}>
              <a href="mailto:newbusiness@snsctd.com" style={{ color: 'white', textDecoration: 'underline' }}>newbusiness@snsctd.com</a>
            </p>
            <p style={{ marginBottom: '5px' }}>+91 9491766369</p>
          </div>
          <div style={{ flex: '1 1 180px', marginBottom: '10px' }}>
            <h6>USA</h6>
            <p style={{ marginBottom: '5px' }}>
              <a href="mailto:usa@snsctd.com" style={{ color: 'white', textDecoration: 'underline' }}>newbusiness@snsctd.com</a>
            </p>
            <p style={{ marginBottom: '5px' }}>+91 6305484994</p>
          </div>
          <div style={{ flex: '1 1 180px', marginBottom: '10px' }}>
            <p style={{ marginBottom: '5px' }}>Follow us:</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="20" height="20" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" height="20" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" width="20" height="20" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default QuizResult;
