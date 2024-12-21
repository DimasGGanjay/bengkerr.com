import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SidebarUser.css'

const Sidebar = () => {
  return (
    <div className="sidebar-user2">
      <h2>DASHBOARD USER</h2>
      <Link to="../pages/Dashboard/UserDashboard">Dashboard</Link>
      <Link to="../pages/Dashboard/UserChats">Chat</Link>
      <Link to="../pages/Dashboard/UserInvoice">Invoice</Link>
    </div>
  );
};

export default Sidebar;
