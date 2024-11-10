import React from 'react';
import '../styles/ServiceSection.css';

function ServiceSection() {
  const services = [
    { title: 'Service Rutin', price: 'Rp129.000' },
    { title: 'Tune Up', price: 'Rp129.000' },
    { title: 'Bore Up', price: 'Rp129.000' },
    { title: 'Over Haul', price: 'Rp129.000' },
  ];

  return (
    <section className="services">
      <h3>Layanan</h3>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h4>{service.title}</h4>
            <p>{service.price}</p>
            <button>ORDER</button>
          </div>
        ))}
      </div>
      <button className="more-button">Selengkapnya</button>
    </section>
  );
}

export default ServiceSection;
