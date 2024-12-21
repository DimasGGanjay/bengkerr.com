// src/pages/Dashboard/ChatUser .js
import React from 'react';
import SidebarUser  from '../../components/SidebarUser';
import Chat from '../../components/ChatUser';
import '../../styles/ChatUser.css'
const ChatUser  = () => {
  return (
    <div className="chat-container2"> {/* Container utama untuk chat dan sidebar */}
      <div className="dashboard-siuser">
        <SidebarUser  /> {/* Sidebar di kiri */}
      </div>
      <div className="chat-siuser">
        <Chat /> {/* Menampilkan percakapan dengan admin di kanan */}
      </div>
    </div>
  );
};

export default ChatUser ;