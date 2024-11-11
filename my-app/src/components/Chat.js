import React from 'react';

const DashboardChat = () => {
  return (
    <div className="dashboard-panel">
      <div className="chat-history">
        <h3>Riwayat Chat Customer dan Admin</h3>
        {/* Placeholder for chat items */}
        <div className="chat-item">Chat Item 1</div>
        <div className="chat-item">Chat Item 2</div>
      </div>
      <div className="notifications">
        <h3>Notifikasi</h3>
        <div className="notification-item">Notification 1</div>
      </div>
    </div>
  );
};

export default DashboardChat;
