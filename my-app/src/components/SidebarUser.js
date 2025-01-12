import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SidebarUser.css'

const Sidebar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUsername(userData.username); // Ambil username dari localStorage
    }
  }, []);

  return (
    <div className="sidebar-user2">
      <h2>DASHBOARD USER</h2>
      <p>Welcome {username}!</p> {/* Tampilkan username di sini */}
      <Link to="../pages/Dashboard/UserDashboard">Dashboard</Link>
      <Link to="../pages/Dashboard/UserChats">Chat</Link>
      <Link to="../pages/Dashboard/UserInvoice">Invoice</Link>
    </div>
  );
};

export default Sidebar;
