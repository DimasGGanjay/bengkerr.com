import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Cek status login saat komponen dimount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData); // Simpan informasi pengguna
    }
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm('Apakah Anda yakin ingin logout?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      window.location.href = '/';
    }
  };

  return (
    <header className="header">
      <h1><a href='/'>BENGKERR</a></h1>
      <nav>
        <ul>
          <li><a href="\pages/OrderPage">Booking</a></li>
          <li><a href="\pages/Services">Layanan</a></li>
          <li><a href="\pages/Antrian">Informasi Antrian</a></li>
          <li><a href="\pages/Kontak">Tentang Kami</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <span>{user?.username}</span> {/* Tampilkan username pengguna */}
            <a href="\pages/Dashboard/UserDashboard">
              <button className="order-button-log">Dashboard</button>
            </a>
            <button className="order-button-log" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <a href="\pages/Login">
              <button className="order-button-log">Login</button>
            </a>
            <a href="\pages/Register">
              <button className="order-button-log">Register</button>
            </a>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
