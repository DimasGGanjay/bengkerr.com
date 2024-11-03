import React from 'react';
import './ReviewSection.css';

function ReviewSection() {
  return (
    <section className="reviews">
      <h3>Lihat Penilaian</h3>
      <div className="review-cards">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="review-card">
            <h4>Review title</h4>
            <p>Review body</p>
            <p>Reviewer name - Date</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;
