import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SidebarUser.css'

const Sidebar = () => {
  return (
    <div className="sidebar-user2">
      <h2>DASHBOARD ADMIN</h2>
      <Link to="../pages/Dashboard/AdminDashboard">Chat</Link>
      <Link to="../pages/Dashboard/AdminManagement">Manajemen</Link>
      <Link to="../pages/Dashboard/AdminStatistics">Statistik</Link>
      
    </div>
  );
};

export default Sidebar;
