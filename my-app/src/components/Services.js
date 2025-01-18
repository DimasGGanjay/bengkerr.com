import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services({ limit }) {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        setServiceData(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services-container">
      <h1>Layanan</h1>
      {console.log('Service Data:', serviceData)} {/* Debug log */}

      <div className="service-cards">
        {serviceData && serviceData.length > 0 ? (
          serviceData.slice(0, limit).map((service, index) => (
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

function ServiceCard({ title, price, image }) {
  return (
    <div className="service-card">
      <div className="sergrad">
        {/* Menampilkan gambar */}
        <img src={image} alt={title} className="service-image" /> 
        <div className="service-title">{title}</div>
        <div className="service-price">Rp {parseInt(price).toLocaleString('id-ID')}</div> {/* Format harga */}
        
        <a href="../pages/OrderPage">
          <button className="order-button">ORDER</button>
        </a>
      </div>
    </div>
  );
}

export default Services;
