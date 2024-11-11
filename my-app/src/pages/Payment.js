import React from 'react';
import '../styles/Payment.css';

const PaymentPage = () => {
  return (
    <div className="container">
      <div className="section">
        <h2>Scan QR</h2>
        <div className="qr-box">
          {/* Placeholder for QR code */}
        </div>
      </div>
      <div className="section">
        <h2>Pembayaran lain</h2>
        <div className="payment-options">
          <p>Transfer Bank</p>
          <p>098765432112345</p>
          <p>(nominal)</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
