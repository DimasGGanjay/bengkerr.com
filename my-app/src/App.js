import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import OrderPage from './pages/OrderPage';
import Payment from './pages/Payment';
import Antrian from './pages/Antrian';
import Kontak from './pages/Kontak';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import AdminManagement from './pages/Dashboard/AdminManagement';
import AdminStatistics from './pages/Dashboard/AdminStatistics';
import UserDashboard from './pages/Dashboard/UserDashboard';
import UserChats from './pages/Dashboard/UserChats';
import UserInvoice from './pages/Dashboard/UserInvoice';
import ChatList from './components/ChatList'; // Import ChatList
import Chat from './components/Chat'; // Import Chat
import UserChat from './components/ChatUser';
import OwnerDashboard from './pages/Dashboard/OwnerDashboard';

function MainLayout({ children, isAuthenticated }) {
  const location = useLocation();

  const isDashboardPage = location.pathname.includes('/Dashboard');
  const isUserDashboard = location.pathname === '/pages/Dashboard/UserDashboard';

  return (
    <>
      {(!isDashboardPage || isUserDashboard) && <Header />}
      <main>{children}</main>
      {(!isDashboardPage || isUserDashboard) && <Footer />}
    </>
  );
}


function App() {
  // Cek status login saat aplikasi dimuat
  useEffect(() => {
    const token = localStorage.getItem('token');
    // if (!token) {
    //   // Redirect ke halaman login jika tidak ada token
    //   window.location.href = '/pages/Login';
    // }
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <MainLayout isAuthenticated={isAuthenticated}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/pages/Register" element={<Register />} />
            <Route path="/pages/Services" element={<Services />} />
            <Route path="/pages/OrderPage" element={<OrderPage />} />
            <Route path="/pages/Payment" element={<Payment />} />
            <Route path="/pages/Antrian" element={<Antrian />} />
            <Route path="/pages/Kontak" element={<Kontak />} />
            <Route path="/pages/Dashboard/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/pages/Dashboard/AdminManagement" element={<AdminManagement />} />
            <Route path="/pages/Dashboard/AdminStatistics" element={<AdminStatistics />} />
            <Route path="/pages/Dashboard/UserDashboard" element={<UserDashboard />} />
            <Route path="/pages/Dashboard/UserChats" element={<UserChats />} />
            <Route path="/pages/Dashboard/UserInvoice" element={<UserInvoice />} />
            <Route path="/pages/Dashboard/UserChats/chatlist" element={<ChatList />} />
            <Route path="/pages/Dashboard/UserChats/chatlist/chat/:userId" element={<Chat />} />
            <Route path="/pages/Dashboard/UserChats/UserChat" element={<UserChat />} />
            <Route path="/pages/Dashboard/OwnerDashboard" element={<OwnerDashboard />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
