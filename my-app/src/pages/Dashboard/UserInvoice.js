import React from 'react';
import '../../styles/UserInvoice.css';
import SidebarUser from '../../components/SidebarUser';

const InvoiceUser = () => {
  return (
    <div className="invoice-user">
        <div className="dashboard-container">
      <SidebarUser />
      <div className="invoice-list">
        <h3>Daftar Invoice yang Belum Dibayar</h3>
        {/* Unpaid invoices here */}
        <div className="invoice-item">Invoice 1</div>
      </div>
      <div className="invoice-history">
        <h3>Riwayat Pembayaran Invoice</h3>
        {/* Invoice history here */}
        <div className="history-item">Invoice History 1</div>
      </div>
     </div>
     
    </div>
  );
};

export default InvoiceUser;
