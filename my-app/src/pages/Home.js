import React from 'react';

import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import ReviewSection from '../components/ReviewSection';
import ContactForm from '../components/ContactForm';

// import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Service Section */}
      <ServiceSection />

      {/* Review Section */}
      <ReviewSection />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Home;
