import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing the necessary routing components
import Home from './pages/Home';  // Import the Home component
import Login from './pages/Login';  // Import the Login component
import Register from './pages/Register'; 
import Header from './components/Header';
import Footer from './components/Footer';
// import Services from './components/ServiceSection';
import Services from './components/Services';
import OrderPage from './pages/OrderPage';
import Payment from './pages/Payment';
import Antrian from './pages/Antrian';
import Kontak from './pages/Kontak';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import AdminManagement from './pages/Dashboard/AdminManagement';
import AdminStatistics from './pages/Dashboard/AdminStatistics';
import UserChats from './pages/Dashboard/UserChats';

// import HeroSection from './HeroSection'; // If used
// import ServiceSection from './ServiceSection'; // If used
// import ReviewSection from './ReviewSection'; // If used
// import ContactForm from './ContactForm'; // If used

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header akan muncul di setiap halaman */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Login" element={<Login />} />
            <Route path="/pages/Register" element={<Register />} />
            <Route path="/pages/Services" element={<Services />} />
            <Route path="/pages/OrderPage" element={<OrderPage />} />
            <Route path="/pages/Payment" element={<Payment />} />
            <Route path="/pages/Antrian" element={<Antrian />} />
            <Route path="/pages/Kontak" element={<Kontak />} />
            <Route path="/pages/Dashboard/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/pages/Dashboard/AdminManagement" element={<AdminManagement />} />
            <Route path="/pages/Dashboard/AdminStatistics" element={<AdminStatistics />} />
            <Route path="/pages/Dashboard/UserChats" element={<UserChats />} />
          </Routes>
        </main>
        <Footer /> {/* Footer akan muncul di setiap halaman */}
      </div>
    </Router>
  );
}

export default App;
