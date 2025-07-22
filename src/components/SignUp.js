import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!username || !password || !confirm) {
      alert("All fields are required");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post('http://localhost:8080/api/signup', {
        username,
        password,
        role
      });
      alert(res.data);
      navigate("/");
    } catch (err) {
      alert(err.response?.data || "Signup failed");
    }
  };

  const styles = {
    container: {
      display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(to right, #00c6ff, #0072ff)', fontFamily: 'Segoe UI'
    },
    box: {
      backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', textAlign: 'center', width: '320px'
    },
    input: { width: '100%', padding: '10px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '10px', backgroundColor: '#0072ff', color: 'white', border: 'none', borderRadius: '8px', marginTop: '12px' },
    select: { width: '100%', padding: '10px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ccc' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Sign Up</h2>
        <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.select}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        <input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} style={styles.input} />
        <button onClick={handleSignUp} style={styles.button}>Sign Up</button>
      </div>
    </div>
  );
}
export default SignUp;