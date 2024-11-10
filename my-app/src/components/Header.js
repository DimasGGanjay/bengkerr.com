import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1><a href='/'>BENGKERR</a></h1>
      <nav>
        <ul>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#layanan">Layanan</a></li>
          <li><a href="#antrian">Informasi Antrian</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button><a href="../pages/Login">Sign in</a></button>
        <button><a href="../pages/Register">Register</a></button>
      </div>
    </header>
  );
}

export default Header;
