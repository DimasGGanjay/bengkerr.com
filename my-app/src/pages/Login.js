import React, { useState } from 'react';
import '../styles/Login.css'; // Pastikan untuk mengimpor CSS yang benar

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validasi input
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    // Tambahkan logika login di sini (misalnya autentikasi)
    console.log('Login clicked', { email, password });
    setSuccess('Login successful! Redirecting...');
    // Redirect atau logika lain setelah login berhasil
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
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