import React from 'react';
import '../styles/OrderPage.css'; // Ensure this CSS file is created

function OrderPage() {
  return (
    <div className="order-container">
      <h1>Booking Service</h1>
      <div className="order-content">
        {/* Image section */}
        <div className="service-image-placeholder">
           <img src="../assets/main_banner.png" alt="Deskripsi gambar" />
        </div>

        {/* Form section */}
        <div className="booking-form">
          <h2>Form Booking Service</h2>
          <div className="form-group">
            <label>Nama</label>
            <input type="text" placeholder="Masukkan Nama" />
            <label>No Telp</label>
            <input type="text" placeholder="Masukkan No Telp" />
          </div>

          <div className="form-group">
            <label>Tgl</label>
            <input type="date" />
            <label>Jam</label>
            <input type="time" />
          </div>

          <div className="form-group">
            <label>Motor</label>
            <input type="text" placeholder="Masukkan Jenis Motor" />
            <label>Nomor Plat</label>
            <input type="text" placeholder="Masukkan Nomor Plat" />
          </div>

          <div className="form-group">
            <label>Keluhan</label>
            <textarea placeholder="Masukkan Keluhan"></textarea>
          </div>

          <a href="../pages/Payment">
        <button className="booking-button">Order</button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
