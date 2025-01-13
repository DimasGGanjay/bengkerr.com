                                          // Services.js
import React from 'react';
import '../styles/Services.css';

function ServiceCard({ title, price, image }) {
  return (
    <div className="service-card">
      <div class="sergrad">
      <div className="service-title">{title}</div>
      <div className="service-price">{price}</div>
      <a href="../pages/OrderPage">
      <button className="order-button">ORDER</button>
      </a>
      </div>
    </div>
  );
}

function Services({ serviceData }) {
  return (
    <div className="services-container">
      <h1>Layanan</h1>
      <div className="service-cards">
        {serviceData && serviceData.length > 0 ? (
          serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              image={service.image}
            />
          ))
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </div>
  );
}

export default Services;
