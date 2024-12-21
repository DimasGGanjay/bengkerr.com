import React from 'react';

import HeroSection from '../components/HeroSection';
import ReviewSection from '../components/ReviewSection';
import ContactForm from '../components/ContactForm';
import Services from '../components/Services';

// import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection />
    
  {/* Service Section */}
  <Services limit={4} />
  <div className='hero-button'>
     <a href="../pages/Services">
        <button className="order-button-log">Selengkapnya</button>
        </a>   
     </div>
      
      {/* Review Section */}
      <ReviewSection />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Home;
