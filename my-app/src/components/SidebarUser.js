import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>DASHBOARD USER</h2>
      <Link to="../pages/Dashboard/UserDashboard">Dashboard</Link>
      <Link to="../pages/Dashboard/UserChats">Chat</Link>
      <Link to="../pages/Dashboard/UserInvoice">Invoice</Link>
      <button>Akun</button>
    </div>
  );
};

export default Sidebar;
