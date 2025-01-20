import React from 'react';
import SidebarUser from '../../components/SidebarUser';
import NomorAntrian from '../../components/NomorAntrian';

import '../../styles/UserDashboard.css';

const DashboardUser = () => {
  return (
    <div className="dashboard-user">
      {/* Sidebar remains separate */}
      <SidebarUser />
      

      {/* Main content container */}
      <div className="dashboard-content">
        <div className="queue-info">
          <h3>Nomor Antrian dan Detail Layanan</h3>
          {/* Queue details here */}
          <NomorAntrian />
        </div>

        <div className="notifications">
          <h3>Daftar Notifikasi</h3>
          {/* Notifications here */}
          <div className="notification-item">Notification 1</div>
        </div>

        <div className="history">
          <h3>Histori Layanan</h3>
          {/* Service history here */}
          <div className="history-item">History Item</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
