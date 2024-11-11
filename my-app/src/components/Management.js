import React from 'react';

const DashboardManagement = () => {
  return (
    <div className="dashboard-panel">
      <div className="customer-list">
        <h3>Daftar Pelanggan Aktif</h3>
        <div className="customer-item">Customer 1</div>
      </div>
      <div className="spare-parts">
        <h3>Tambah Suku Cadang</h3>
        <div className="spare-part-item">Spare Part 1</div>
      </div>
      <div className="mechanic-presence">
        <h3>Presensi Mekanik</h3>
        <div className="mechanic-item">Mechanic 1</div>
      </div>
    </div>
  );
};

export default DashboardManagement;
