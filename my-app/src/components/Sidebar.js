import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>DASHBOARD ADMIN</h2>
      <Link to="../pages/Dashboard/AdminDashboard">Chat</Link>
      <Link to="../pages/Dashboard/AdminManagement">Manajemen</Link>
      <Link to="../pages/Dashboard/AdminStatistics">Statistik</Link>
      <button>Akun</button>
    </div>
  );
};

export default Sidebar;
