import React, { useState } from 'react';
import '../styles/Login.css'; // Gunakan style yang sama

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Menambahkan state untuk konfirmasi password

  const handleRegister = (e) => {
    e.preventDefault();
    // Cek apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Tambahkan logika registrasi di sini (misalnya simpan ke database)
    console.log('Register clicked', { email, password });
  };

  return (
    <div className="login-container"> {/* Menggunakan container yang sama dengan halaman Login */}
      <div className="login-box">
        <h2>Register</h2> {/* Ganti judul menjadi Register */}
        <form onSubmit={handleRegister}>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
    
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
