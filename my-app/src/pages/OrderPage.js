import React from 'react';
import '../styles/OrderPage.css'; // Ensure this CSS file is created

function OrderPage() {
  return (
    <div className="order-container">
      <h1>Form Booking Service</h1>
      <div className="order-content">
        {/* Image section */}
        <div className="service-image-placeholder">
           <img src="../assets/main_banner.png" alt="Deskripsi gambar" />
        </div>

        {/* Form section */}
        <div className="booking-form1">
          <div className="form-group">
            <label>Nama</label>
            <input type="text" placeholder="Masukkan Nama" />
            <label>No Telp</label>
            <input type="text" placeholder="Masukkan No Telp" />
          </div>

          <div className="form-group2">
            <label>Tgl</label>
            <input type="date" />
            <label>Jam</label>
            <input type="time" />
          </div>

          <div className="form-group">
            <label>Motor</label>
            <select>
              <option value="">Pilih Merk Motor</option>
              <option value="honda">Honda</option>
              <option value="yamaha">Yamaha</option>
              <option value="suzuki">Suzuki</option>
              <option value="kawasaki">Kawasaki</option>
              <option value="ducati">Ducati</option>
              <option value="bmw">BMW</option>
              <option value="ktm">KTM</option>
              <option value="other">Merk Lainnya</option>
            </select>
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
