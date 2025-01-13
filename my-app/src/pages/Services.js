import React, { useEffect, useState } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    // Fetch data dari database atau API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        setServiceData(data);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="services-container">
      <Services serviceData={serviceData} />
    </div>
  );
};

export default ServicesPage;
