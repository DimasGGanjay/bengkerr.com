import React from 'react';
import '../styles/Header.css';

function Header() {
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
      <a href="\pages/Login">
        <button className="order-button-log">Login</button>
        </a>
        <a href="\pages/Register">
        <button className="order-button-log">Register</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
