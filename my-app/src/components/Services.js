// Services.js
import React from 'react';
import '../styles/Services.css';

function ServiceCard({ title, price, image }) {
  return (
    <div className="service-card">
      <div className="service-title">{title}</div>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-price">{price}</div>
      <a href="../pages/OrderPage">
      <button className="order-button">ORDER</button>
      </a>
    </div>
  );
}

function Services({ limit }) {
  const serviceData = [
    { title: "Service Rutin", price: "Rp129.000", image: "/service1.png" },
    { title: "Tune Up", price: "Rp129.000", image: "/service2.png" },
    { title: "Bore Up", price: "Rp129.000", image: "/service3.png" },
    { title: "Over Haul", price: "Rp129.000", image: "/service4.png" },
    { title: "Special Service", price: "Rp149.000", image: "/service5.png" },
    { title: "Full Check", price: "Rp159.000", image: "/service6.png" },
    { title: "Service Rutin", price: "Rp129.000", image: "/service1.png" },
    { title: "Tune Up", price: "Rp129.000", image: "/service2.png" },
    { title: "Bore Up", price: "Rp129.000", image: "/service3.png" },
    { title: "Over Haul", price: "Rp129.000", image: "/service4.png" },
    { title: "Special Service", price: "Rp149.000", image: "/service5.png" },
    { title: "Full Check", price: "Rp159.000", image: "/service6.png" },
    // Add more services if needed
  ];

  return (
    <div className="services-container">
      <h1>Layanan</h1>
      <div className="service-cards">
        {serviceData.slice(0, limit).map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
