import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [rating, setRating] = useState(0); // State untuk menyimpan rating
  const [hover, setHover] = useState(0);   // State untuk efek hover

  return (
    <section className="contact-form">
      <h3>Beri Penilaian</h3>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <div className="rating">
          <label>Nilai:</label>
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <span
                key={index}
                className={`star ${starValue <= (hover || rating) ? 'active' : ''}`}
                onClick={() => setRating(starValue)} // Mengatur rating saat bintang diklik
                onMouseEnter={() => setHover(starValue)} // Efek hover saat mouse masuk
                onMouseLeave={() => setHover(0)} // Menghapus hover saat mouse keluar
                style={{ cursor: 'pointer', fontSize: '24px', color: starValue <= (hover || rating) ? '#ffd700' : '#ccc' }}
              >
                ★
              </span>
            );
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
