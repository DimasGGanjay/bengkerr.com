import React from 'react';

const DashboardStatistics = () => {
  return (
    <div className="dashboard-panel">
      <div className="monthly-income">
        <h3>Pendapatan Bulan Ini</h3>
        <div className="income-chart">Chart</div>
      </div>
      <div className="monthly-chart">
        <h3>Grafik Pendapatan Perbulan</h3>
        <div className="chart-placeholder">Chart Placeholder</div>
      </div>
      <div className="transaction-history">
        <h3>Riwayat Transaksi</h3>
        <div className="transaction-item">Transaction 1</div>
      </div>
    </div>
  );
};

export default DashboardStatistics;
