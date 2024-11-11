import React from 'react';
import '../styles/Kontak.css'; // Create a CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Kontak Kami</h1>
      
      <div className="contact-section">
        <h2>Email</h2>
        <p>info@yourwebsite.com</p>
      </div>

      <div className="contact-section">
        <h2>Sosial Media</h2>
        <ul className="social-links">
          <li><a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://linkedin.com/yourpage" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Alamat</h2>
        <p>Jl. Contoh Alamat No.123, Kota, Provinsi, Kode Pos</p>
      </div>

      <div className="contact-section">
        <h2>Visi & Misi</h2>
        <h3>Visi</h3>
        <p>Mewujudkan layanan terbaik untuk pelanggan dengan menyediakan pengalaman berkendara yang aman dan nyaman.</p>
        
        <h3>Misi</h3>
        <ul>
          <li>Menyediakan layanan berkualitas tinggi yang memenuhi kebutuhan pelanggan.</li>
          <li>Menjadi mitra yang terpercaya dalam perawatan dan pemeliharaan kendaraan.</li>
          <li>Memajukan teknologi dan inovasi dalam bidang otomotif.</li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Jam Operasional</h2>
        <p>Senin - Jumat: 08.00 - 17.00</p>
        <p>Sabtu: 08.00 - 12.00</p>
        <p>Minggu & Hari Libur: Tutup</p>
      </div>
    </div>
  );
};

export default ContactPage;
