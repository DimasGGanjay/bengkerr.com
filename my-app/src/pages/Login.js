import React, { useState } from 'react';
import '../styles/Login.css'; // Ensure to import CSS

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
  
      // Validasi input
      if (!email || !password) {
          setError('Email and password are required');
          return;
      }
  
      try {
          const response = await fetch('http://localhost:5000/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });
  
          const data = await response.json();
          if (response.ok) {
              setSuccess(data.message);
              // Simpan token dan informasi pengguna di localStorage
              localStorage.setItem('token', data.token); // Simpan token
              localStorage.setItem('user', JSON.stringify({ userId: data.userId, username: data.username, role: data.role })); // Simpan informasi pengguna
              if (data.role === 'admin') {
                  window.location.href = './Dashboard/AdminDashboard'; // Adjust the path as needed
              } else if (data.role === 'user') {
                  window.location.href = './Dashboard/UserDashboard'; // Adjust the path as needed
              } else if (data.role === 'owner') {
                  window.location.href = './Dashboard/OwnerDashboard'; // Adjust the path as needed
              }
          } else {
              setError(data.message || 'Login failed');
          }
      } catch (error) {
          setError('Failed to login. Please try again.');
          console.error('Login error:', error);
      }
  };

    return (
        <div className="login-container1">
            <div className="login-box1">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group-login">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-login">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <p>Don't have an account? <a href="/pages/Register">Register here</a></p>
            </div>
        </div>
    );
};

export default Login;