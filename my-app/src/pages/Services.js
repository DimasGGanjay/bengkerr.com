import React, { useEffect, useState } from 'react';
import ServicesComponent from '../components/Services'; // Mengimpor komponen Services

function ServicesPage() {
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
    <div>
      <h1>Halaman Layanan</h1>
      <ServicesComponent serviceData={serviceData} />
    </div>
  );
}

export default ServicesPage;
