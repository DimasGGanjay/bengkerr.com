import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import UserChat from './components/ChatUser'; // Import Chat



function MainLayout({ children }) {
  const location = useLocation();
  console.log("Current Path:", location.pathname); 

  const isDashboardPage = location.pathname.includes('/Dashboard');

  return (
    <>
      {!isDashboardPage && <Header />}
      <main>{children}</main>
      {!isDashboardPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout>
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
            <Route path="/pages/Dashboard/UserDashboard" element={<UserDashboard />} />
            <Route path="/pages/Dashboard/UserChats" element={<UserChats />} />
            <Route path="/pages/Dashboard/UserInvoice" element={<UserInvoice />} />
            <Route path="/pages/Dashboard/UserChats/chatlist" element={<ChatList />} /> {/* Rute untuk ChatList */}
            <Route path="/pages/Dashboard/UserChats/chatlist/chat/:userId" element={<Chat />} /> {/* Rute untuk Chat */}
            <Route path="/pages/Dashboard/UserChats/UserChat" element={<UserChat />} /> {/* Rute untuk Chat */}
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
