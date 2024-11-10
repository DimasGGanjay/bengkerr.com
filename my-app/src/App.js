import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import ReviewSection from './components/ReviewSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServiceSection />
      <ReviewSection />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
