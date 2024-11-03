import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-form">
      <h3>Beri Penilaian</h3>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <div className="rating">
          <label>Nilai:</label>
          {[...Array(5)].map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
