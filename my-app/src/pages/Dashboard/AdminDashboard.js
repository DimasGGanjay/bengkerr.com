import React from 'react';
import Sidebar from '../../components/Sidebar';
import ChatList from '../../components/ChatList';
import Notifications from '../../components/Notification'; // Pastikan komponen ini ada
import '../../styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <div className="dashboard-panel">
          <div className="chatlist-container">
            <h2>Chat</h2>
            <ChatList />
          </div>
          <div className="notifications-container">
            <h2>Notifikasi</h2>
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;