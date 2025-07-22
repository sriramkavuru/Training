import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
        role
      });
      localStorage.setItem('username', username); 
      localStorage.setItem('role', role);
      alert("Login successful");
      navigate(role === "admin" ? "/admin" : "/student");
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  const styles = {
    container: {
      display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(to right,rgb(45, 205, 226),rgb(231, 236, 236))', fontFamily: 'Segoe UI'
    },
    box: {
      backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', textAlign: 'center', width: '320px'
    },
    input: { width: '100%', padding: '10px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '10px', backgroundColor: '#4a00e0', color: 'white', border: 'none', borderRadius: '8px', marginTop: '12px' },
    select: { width: '100%', padding: '10px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ccc' },
    link: { marginTop: '10px', fontSize: '14px' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Login</h2>
        <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.select}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        <button onClick={handleLogin} style={styles.button}>Login</button>
        <p style={styles.link}>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
}
export default Login;
